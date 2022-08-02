const { readFileSync , writeFileSync } = require('fs')

const first = readFileSync('./cont/first.txt', 'utf8')
const second = readFileSync('./cont/second.txt', 'utf8')

// console.log(first);
// console.log(second);

//writeFileSync("./cont/result-sync.txt" , `It is well known that:  ${first}`)

