;(function () {
  var currentScript = document.currentScript
  var script = document.createElement('script')
  script.defer = true
  script.src = 'https://datafa.st/js/script.js'

  if (currentScript) {
    for (var i = 0; i < currentScript.attributes.length; i++) {
      var attr = currentScript.attributes[i]
      if (attr.name.indexOf('data-') === 0) {
        script.setAttribute(attr.name, attr.value)
      }
    }
  }

  var target = currentScript && currentScript.parentNode
  if (target) target.insertBefore(script, currentScript.nextSibling)
  else document.head.appendChild(script)
})()
