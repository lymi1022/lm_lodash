let _ = require('lodash')
let arr = [1, 5, 8, 1]
let brr = [{
  a: 1
}, {
  b: 2
}, {
  c: 3
}, {
  b: 3
}, {
  b: 2
}]
// tail 获取除了array数组第一个元素以外的全部元
// 1. array (Array): 要检索的数组。
const tail = _.tail(arr) // => [5, 8, 1]

// take从array数组起始元素开始的n个元素
// 1. array(Array): 要检索的数组。
// 2. [n = 1](number): 要提取的元素个数。
const take = _.take(arr) // => [1]
const take1 = _.take(arr, 3) // => [1, 5, 8]

// takeRight 从最后一个元素开始提取元素
// 1. array(Array): 要检索的数组。
// 2. [n = 1](number): 要提取的元素个数。
const takeRight = _.takeRight(arr, 2) // => [8 ,1]
const takeRight1 = _.takeRight(brr, 2) // => [{c: 3}, {b: 3}]

// takeRightWhile 从array数组的最后一个元素开始提取元素，直到返回假值
// 1. array(Array): 要检索的数组。[predicate = _.identity](Array | Function | Object | string): 每次迭代调用的函数。
const takeRightWhile = _.takeRightWhile(brr, o => o.b) // => [ { b: 3 }, { b: 2 } ]
const takeRightWhile1 = _.takeRightWhile(brr, 'b') // => [ { b: 3 }, { b: 2 } ]