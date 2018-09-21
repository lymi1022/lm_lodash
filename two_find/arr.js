let _ = require('lodash')
const formatted = [1,12,123,1234]
const a = _.map(formatted, (i) => {
  console.log(i.toString());
  return i.toString().padStart(10, '*')
})
console.log(a)