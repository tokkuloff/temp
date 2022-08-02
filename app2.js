const _ = require('lodash');

const vesh = [1, [2 ,[3 ,[4]]]]
const novyVesh = _.flattenDeep(vesh)
console.log(novyVesh);