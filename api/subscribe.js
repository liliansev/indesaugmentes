import * as welcomeEmail from './_emails/welcome-waitlist.js'

const AUDIENCE_ID = '7806f7d3-76b3-47f3-8fa8-fd3dd23d83e5'
const FROM = 'Lilian Sevoumian <lilian@indesaugmentes.com>'
const REPLY_TO = 'bonjour@liliansevoumian.fr'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing RESEND_API_KEY' })
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : ''
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Email invalide' })
  }

  const addRes = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  })

  const addData = await addRes.json().catch(() => ({}))

  if (!addRes.ok) {
    return res.status(addRes.status).json({ error: addData?.message || 'Resend error' })
  }

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: email,
        reply_to: REPLY_TO,
        subject: welcomeEmail.subject,
        html: welcomeEmail.html,
        text: welcomeEmail.text,
      }),
    })
  } catch (err) {
    console.error('welcome email failed', err)
  }

  return res.status(200).json({ ok: true })
}
