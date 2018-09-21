let _ = require('lodash')
let arr = [1, 2]
let brr = [3,4]
let crr = [5,6]

// zip
// 返回数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素
const zip = _.zip(arr, brr, crr) // [[1, 3, 5], [2, 4, 6]]

// unzip
// 返回数组的第一个元素包含所有的输入数组的第一元素， 第一个元素包含了所有的输入数组的第二元素
const arrBrrCrr = [arr, brr, crr] // [[1, 2], [3, 4], [5, 6]]
const unzip = _.unzip(arrBrrCrr) // [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
const unzip1 = _.unzip(zip) // [[1, 2], [3, 4], [5, 6]]

// unzipWith 
// 接受一个iteratee指定重组值应该如何被组合
// 1. array (Array): 要处理的分组元素数组。
// 2. 这个函数用来组合重组的值
const unzipWith = _.unzipWith([[ 1, 3, 5 ], [ 2, 4, 6 ]], _.add) // [ 3, 7, 11 ]

// without
// 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。 
// 与pull的区别： 会返回一个新数组
// 1. array(Array): 要检查的数组。
// 2. [values](...*): 要剔除的值。
const without = _.without([1,2,3,4,2], 2) // [1, 3, 4]
const without1 = _.without([1, 3, 5], 4, 3, 1) // [5]

// xor  TODO
// 创建一个给定数组唯一值的数组，做等值比较，返回值顺序取决于他们数组出现顺序

// zipObject
// 接受2个数组，第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值
const zipObject = _.zipObject(['a', 'b', 'c'], [1, 2, 4]); // { 'a': 1, 'b': 2, 'c': 4 }

// zipObjectDeep 
// 这个方法类似 _.zipObject，除了它支持属性路径
const zipObjectDeep = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [11, 22]) // {'a': 'b': [{c: 11}, {d: 22}]}

// zipWith 
// 这个方法类似于_.zip，不同之处在于它接受一个 iteratee（迭代函数），来 指定分组的值应该如何被组合
const zipWith = _.zipWith([1, 2], [100, 200], function(a, b) {
  return a + b
}) // [101, 202]

const zipWith1 = _.zipWith([1, 2, 3], [100, 200, 300], [1, 2, 3], function (a, b, c) {
  return a + b + c
}) // [102, 204, 306]