const path = require('path')
console.log(path.sep);

const filePath = path.join('cont','subc','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,'cont','subc','test.txt' )
console.log(absolute);