var _ = require('lodash')
const arr = [0, 1, 2, undefined, 3, null, 4, 5]
const brr = [{a: 1}, {a: undefined}, {a: 3}, {a: 4, b: null, c: 444}]
// 块
// _.chunk(array, [size=1]) 将数组（array）拆分成多个 size 长度的区块
// 1. array (Array): 需要处理的数组
// 2. [size=1] (number): 每个数组区块的长度
let chunk = _.chunk(arr, 3) 
let chunk1 = _.chunk(brr, 2)

// 紧凑
// _.compact _.compact(array) 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”
// 1. array (Array): 待处理的数组
const compact = _.compact(arr)
const compact1 = _.compact(brr)

// 连接
// _.concat 创建一个新数组，将array与任何数组 或 值连接在一起。
// 1. array (Array): 被连接的数组。
// 2. [values] (...*): 连接的值。
const concat = _.concat(arr, brr) // arr + brr
const concat1 = [...arr, ...brr] // arr + brr
const concat3 = _.concat(_.compact(arr), brr) // arr的真 + brr

// 区别、不同的
// _.difference 返回排除后的值
// 1. array (Array): 要检查的数组。
// 2. [values] (...Array): 排除的值。
const difference = _.difference(arr, [3, 5]) // [0, 1, 2, undefined, null, 4]

// 区别
// differenceBy 
// 1. array (Array): 要检查的数组。
// 2. [values] (...Array): 排除的值。
// 3. [iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。
const differenceBy = _.differenceBy([2.1, 3.5, 5.1], [2.6, 5.3], Math.floor) // 把两个数组的每个元素Math.floor后做排除结果：3.5。相当与_.difference([2,3,5],[2,5]) // 3
const differenceBy1 = _.differenceBy([{'a': 1, 'b': 3}, {'a': 2, 'b': 4}], [{'a': 3}], 'a') // 前两个参数中，a的属性比较排除，结果：[],
const differenceBy2 = _.differenceBy([{'a': 1, 'b': 3}, {'a': 2, 'b': 4}], [{'a': 2}], 'a') // 比较a的属性为2的排除掉，结果：[{'a': 1, 'b': 3}],


// 区别 TODO
// differenceWith
// 1. array (Array): 要检查的数组。
// 2. [values] (...Array): 排除的值。
// 3. [comparator] (Function): comparator 调用每个元素。
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const differenceWith = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
console.log(differenceWith);
