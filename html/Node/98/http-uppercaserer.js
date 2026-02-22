     const map = require('through2-map')
     inStream.pipe(map(function (chunk) {
       return chunk.toString().split('').reverse().join('')
     })).pipe(outStream)
