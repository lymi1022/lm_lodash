let _ = require('lodash')
const arr = [1, 3, 8, 7, 9, 2, 4]
const brr = [{ x: 1 }, { y: 2 }, { z: 3 }, { d: 4 }, { e: 5 }]

// remove 返回移除元素组成的数组 这个方法会改变数组 array
// 1. array(Array): 要修改的数组。
// 2. [predicate = _.identity](Array | Function | Object | string): 每次迭代调用的函数。
const remove = _.remove(arr, o => o % 2 === 0) // => [ 8, 2, 4 ]

// reverse 反转array 这个方法会改变原数组 array，
// 1. array(Array): 要修改的数组
const reverse = _.reverse(arr)

// slice  裁剪数组，没改变原数组， 从 start 位置开始到end结束，但不包括 end 本身的位置
// 1. array (Array): 要裁剪数组。
// 2. [start = 0](number): 开始位置。
// 3. [end = array.length](number): 结束位置。
const slice = _.slice(brr, 1, 3) // => [{ y: 2 }, { z: 3 }]
const slice1 = _.slice(brr, 3) // => [{ d: 4 }, { e: 5 }]
const slice2 = _.slice(brr, 2, 4) // => [{ z: 3 }, { d: 4 }]

// sortedIndex
// 1. arrar(Array):要检查的排序数组
// 2. value (*): 要评估的值
const sortedIndex = _.sortedIndex([30, 40, 33, 30, 31, 40], 33) // => 3
// sortedIndexBy
// 1. array (Array): 要检查的排序数组。
// 2. value(*): 要评估的值。
// 3. [iteratee = _.identity](Array | Function | Object | string): 迭代函数，调用每个元素。
const crr = [{ x: 1 }, { x: 2 }, { z: 3 }, { x: 4 }, { e: 5 }]
const sortedIndexBy = _.sortedIndexBy(crr, { x: 3 }, o => o.x) // => 2

// sortedIndexOf在已经排序的数组array上执行二进制检索
// 1. array(Array): 要搜索的数组。
// 2. value( * ): 搜索的值。
const sortedIndexOf = _.sortedIndexOf([4, 5, 5, 5, 6], 5) // => 1

// sortedLastIndex 返回 value值 在 array 中尽可能大的索引位置
const sortedLastIndex = _.sortedLastIndex([4, 5, 5, 5, 6], 5) // => 4

// sortedLastIndexBy回 value值 应该在数组array中插入的索引位置 index。
// 1. array(Array): 要检查的排序数组。
// 2. value(*): 要评估的值。
// 3. [iteratee = _.identity](Array | Function | Object | string): 迭代函数，调用每个元素。
const drr = [{ x: 1 }, { x: 2 }, { x: 1 }, { z: 2 }, { x: 3 }]
const sortedLastIndexBy = _.sortedLastIndexBy(drr, { x: 4 }, o => o.y)

// 相连的值重复，则只留一个
// sortedUniq 优化排序数组 若连续的值重复，则返回去掉一个的值的新数组
// 1. array (Array): 要检查的数组。
const frr = [1, 4, 2, 4, 4, 4]
const sortedUniq = _.sortedUniq(frr) // => [ 1, 4, 2, 4 ]

// sortedUniqBy它会优化排序数组
// 1. array(Array): 要检查的数组。
// 2. [iteratee](Function): 迭代函数，调用每个元素。
const sortedUniqBy = _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor) // => [1.1, 2.3]

