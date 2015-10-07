# files-require-hook

require files as paths

## install

with [`npm`](https://npmjs.org), run

```bash
npm install --save files-require-hook
```

## usage

```js
require('files-require-hook')({
  extensions: ['png', 'svg'],
  base: process.cwd()
})

var filePath = require('./file.txt')
console.log(filePath) // file.txt
```
