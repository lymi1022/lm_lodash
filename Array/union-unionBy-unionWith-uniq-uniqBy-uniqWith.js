let _ = require('lodash')
let arr = [1, 9, 7, 3]
let brr = [2, 7, 9]
let crr = [{ a: 1 }, { b: 2 }, { b: 3 }]
let drr = [{ a: 1 }, { c: 3 }]

// union 创建一个按顺序排列的唯一值的数组。（数组）的并集，按顺序返回，返回数组的元素是唯一的
// 1. [arrays](...Array): 要检查的数组。
const union = _.union(arr, brr) // => [1,9, 7,3,2]
const union2 = _.union(crr, drr) // => [ { a: 1 }, { b: 2 }, { b: 3 }, { a: 1 }, { c: 3 }]

// unionBy
// 1. [arrays] (...Array): 要检查的数组。
// 2. [iteratee = _.identity](Array | Function | Object | string): 迭代函数，调用每个元素。
const unionBy = _.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], 'x') // => [ { x: 1 }, { x: 2 } ]

// unionWith
// 1. [arrays] (...Array): 要检查的数组。
// 2. [comparator](Function): 比较函数，调用每个元素。
const unionWith = _.unionWith(brr, crr, _.isEqual) // => [{ a: 1 }, { b: 2 }, { b: 3 }, { c: 3 }]

// uniq 创建一个去重后的array数组副本
const uniq = _.uniq([1, 4, 2, 1]) // => [1,4,2]

// uniqBy 调用每一个数组（array）的每个元素以产生唯一性计算的标准
// 1. array(Array): 要检查的数组。
// 2. [iteratee = _.identity](Array | Function | Object | string): 迭代函数，调用每个元素。
const uniqBy = _.uniqBy([{ a: 1 }, { b: 2 }, { b: 3 }], 'b') // => [{ a: 1 }, { b: 2 }, { b: 3 }]
const uniqBy1 = _.uniqBy([{ a: 1 }, { b: 2 }, { b: 2 }], 'b') // => [ { a: 1 }, { b: 2 } ]

// uniqWith 它接受一个 comparator 调用比较arrays数组的每一个元素
// 1. array(Array): 要检查的数组。
// 2. [comparator](Function): 比较函数，调用每个元素。
let err = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
const uniqWith = _.uniqWith(err, _.isEqual) // [ { x: 1, y: 2 }, { x: 2, y: 1 } ]
