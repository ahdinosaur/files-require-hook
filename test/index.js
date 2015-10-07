var test = require('ava')
var relative = require('path').relative
var join = require('path').join

var filesRequireHook = require('../')
var cwd = process.cwd()

test('require hook for .txt', t => {
  filesRequireHook({
    extensions: ['txt'],
    base: cwd
  })

  ;['./file.txt'].forEach((file) => {
    t.is(
      require(file),
      relative(cwd, join(__dirname, file))
    )
  })

  t.end()
})
