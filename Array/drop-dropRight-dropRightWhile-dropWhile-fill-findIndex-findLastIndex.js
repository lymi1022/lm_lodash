var _ = require('lodash')
const arr = [1, 3, 6, 67, 44]
const brr = [{ a: 2, b: 33 }, { a: 21, b: 331 }, { a: 33, b: 44 }]

// drop
// 创建一个切片数组，去除array前面的n个元素。（n默认值为1)。 返回原来的数组
// 1. array (Array): 要查询的数组。
// 2. [n=1] (number): 要去除的元素个数。 tip:不是索引哦～
const drop = _.drop(arr, 2)
const drop1 = _.drop(brr, 2) // => [{ a: 33, b: 44 }]

// dropRight
// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
// 参数与drop一样
const dropRight = _.dropRight(arr, 2) // => [1, 3]
const dropRight1 = _.dropRight(brr, 2) // => [{'a': 2, 'b': 33}]

// dropRightWhile TODO
// 1. array (Array): 要查询的数组。
// 2. [predicate=_.identity] (Function): 这个函数会在每一次迭代调用。
const dropRightWhile = _.dropRightWhile(brr, o => o.a === 2) // 把brr中的参数===2的去掉

// dropWhile 和dropRightWhile差不多 TODO
const dropWhile = _.dropWhile(brr, { a: 2, b: 33 }) // => {'a': 21, 'b': 331}, {'a': 33, 'b': 44}
const dropWhile1 = _.dropWhile(brr, o => o.a === 21) // => {'a': 21, 'b': 331}, {'a': 33, 'b': 44}

// fill 数组被改掉
// 1 array (Array): 要填充改变的数组。
// 2 value (*): 填充给 array 的值。
// 3 [start=0] (number): 开始位置（默认0）。
// 4 [end=array.length] (number):结束位置（默认array.length）。
const fill = _.fill(arr, '*', 1, 3) // => [1, "*", "*", 67, 44]
const fill2 = _.fill(Array(3), 2) // => [2, 2, 2]

// fillIndex 找到的第一个索引，否则返回-1，区别find返回的索引值
const findIndex = _.findIndex(brr, { a: 21, b: 331 })
const findIndex1 = _.findIndex(brr, o => o.a === 21)
const findIndex2 = _.findIndex(brr, o => o.a === 221) // => -1

// findLastIndex 从后往前找到第一个值的索引， 否则返回-1
const crr = [{ a: 1 }, { b: 2 }, { a: 1 }]
const findLastIndex = _.findLastIndex(crr, { a: 1 }) // => 2
const findLastIndex1 = _.findLastIndex(crr, o => o.a === 1) // => 2
const findLastIndex2 = _.findLastIndex(crr, ['a', 1]) // => 2
const findLastIndex3 = _.findLastIndex(crr, ['a', 3]) // => -1
