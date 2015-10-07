var relative = require('path').relative
var defined = require('defined')

module.exports = filesRequireHook

function filesRequireHook (options) {
  options = defined(options, {})
  
  var extensions = defined(options.extensions, [])
  var base = defined(options.base, '/')

  extensions.forEach(function (ext) {
    require.extensions['.' + ext] = function (module, filename) {
      module.exports = relative(base, filename)
    }
  })
}
