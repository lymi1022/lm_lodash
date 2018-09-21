const _ = require('lodash')
// first = head 获取数组array的第一个元素
// 1. array (Array): 要查询的数组。
const arr = [6, [[2, 4], 6]]
const brr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}]
const head = _.head(arr)  // => 6
const first = _.first(arr) // => 6

// flatten减少一级array嵌套深度
// 1. array (Array): 需要减少嵌套层级的数组
const flatten = _.flatten(arr) // => [6, [2, 4], 6]

// flattenDeep 讲array递归为一维数组
// 1. array (Array): 需要处理的数组。
const flattenDeep = _.flattenDeep(arr) // => [6, 2, 4, 6]

// _.flattenDepth(array, [depth=1])
// 1. array (Array): 需要减少嵌套层级的数组。
// 2. [depth=1] (number):最多减少的嵌套层级数。
const flattenDepth = _.flattenDepth(arr, 1) // => [6, [2, 4], 6]
const flattenDepth1 = _.flattenDepth(arr, 2) // => [6, 2, 4, 6]

// _.fromPairs 返回由键值对pairs构成的对象
const fromPairs = _.fromPairs([['a', 1], ['b', 2]])


// indexOf 返回找到的第一个元素的索引 fromIndex 为负值，将从数组array尾端索引进行匹配
// 1. array (Array): 需要查找的数组。
// 2. value (*): 需要查找的值。
// 3. [fromIndex=0] (number): 开始查询的位置。
const indexOf = _.indexOf([1, 4, 2, 8], 2) // => 2
// findIndex处理数组
const indexOf1 = _.findIndex(brr, o => o.b) // => 1

// initial 去除数组的最后一个元素
// 1. array (Array): 要查询的数组。
const initial = _.initial(arr) // => [6]
const initial1 = _.initial(brr) // => [{a: 1}, {b: 2}, {c: 3}]

// intersection 返回一个包含所有传入数组交集元素的新数组。
// 1. [arrays] (...Array): 待检查的数组。
const intersection = _.intersection([2,4], [5,4], [4, 9]) // => [4]
const intersection1 = _.intersection([3, 5], [1,5], [6, 8]) // => []

// intersectionBy 结果值是从第一数组中选择
// 1. [arrays] (...Array): 待检查的数组。
// 2. [comparator] (Function): comparator（比较器）调用每个元素
const intersectionBy = _.intersectionBy([{a: 4, b: 5}, {b: 5}, {c: 8, b: 5}], 'b') // => [{a: 4, b: 5}]
const intersectionBy1 = _.intersectionBy([{a: 4, b: 5}, {b: 5}, {c: 8, b: 5}], o => o.b) // => [{a: 4, b: 5}]


// intersectionWith 
// [arrays] (...Array): 待检查的数组。
// [comparator] (Function): comparator（比较器）调用每个元素。
const crr = [{a: 1, b: 1}, {a: 2, b: 2}, {a: 1, b: 12}]
const drr = [{a: 1, b: 1}, {a: 2, b1: 2}, {a: 2, b: 1}]
const intersectionWith = _.intersectionWith(crr, drr, _.isEqual) // => [{ a: 1, b: 1 }]

// join 将 array 中的所有元素转换为由 自定义 分隔的字符串。
// 1. array (Array): 要转换的数组。
// 2. [separator=','] (string): 分隔元素。
const join = _.join(arr) // => 6,2,4,6

// last 返回array的最后一个元素
// 1. array (Array): 要检索的数组。
const last = _.last([12, 4,5, 42, 4]) // => 4
const first1 = _.first([12, 4,5, 42, 4]) // => 12

// lastIndexOf 从右往左遍历获取第一个找到的值的索引 
// 1. array (Array): 要搜索的数组。
// 2. value (*): 要搜索的值。
// 3. [fromIndex=array.length-1] (number): 开始搜索的索引值。
const lastIndexOf = _.lastIndexOf(arr, 4) // -1 没有匹配到二维数组
const lastIndexOf1 = _.lastIndexOf(drr, 2) // -1 数组中的对象没有找到，使用findLastIndexOf
const findLastIndex = _.findLastIndex(drr, o => o.b === 1)  // => 2

// nth 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
// 1. array (Array): 要查询的数组。
// 2. [n=0] (number): 要返回元素的索引值。
const nth = _.nth(drr, 1) // => { a: 2, b1: 2 } // + 从索引0开始
const nth1 = _.nth(crr, -2) // => { a: 2, b: 2 } // -数从1开始


