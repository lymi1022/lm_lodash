let _ = require('lodash')
// pull相关会修改原数组
const arr = [2, 5, 7, 2, 7]
let brr = [
  {
    x: 1
  },
  {
    y: 2
  },
  {
    z: 3
  },
  {
    x: 4
  }
]

// pull 移除数组array中所有给定值相等的元素
// 返回原数组剩余的值
// 1. array (Array): 要修改的数组。
// 2. [values] (...*): 要删除的值。
const pull = _.pull(arr, 2, 5) // => [7, 7]

// pullAll 与pull的区别是，接收一个要移除值的数组
const pullAll = _.pullAll(arr, [2, 5]) // => [7, 7]

// pullAllBy类似于_.pullAll ，区别是这个方法接受一个函数
// 1. array (Array): 要修改的数组。
// 2. values (Array): 要移除值的数组。
// 3. [iteratee=_.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。
const pullAllBy = _.pullAllBy(brr, [{ x: 1 }, { y: 2 }], 'x') // => [{ x: 4 }] brr中的x去除x:1,y:2
const pullAllBy1 = _.pullAllBy(brr, [{ x: 1 }, { y: 2 }], 'z') // => [{ z: 3 }]

// pullAllWith
// 1. array(Array): 要修改的数组。
// 2. values(Array): 要移除值的数组。
// 3. [comparator](Function): comparator（比较器）调用每个元素。
let crr = [{ x: 1 }, { y: 2 }, { z: 3 }, { d: 1 }, { x: 3 }]
const pullAllWith = _.pullAllWith(crr, [{ d: 1 }, { x: 3 }], _.isEqual) // => [ { x: 1 }, { y: 2 }, { z: 3 } ]

// pullAt 根据索引移除元素，返回移除元素组成的新数组
// array (Array): 要修改的数组。
// [indexes](...(number | number[])): 要移除元素的索引。
const drr = [1, 4, 6, 8, 9, 5]
const pullAt = _.pullAt(drr, 2, 4) // => [6, 9]
console.log(drr) // => [ 1, 4, 9, 5 ]
