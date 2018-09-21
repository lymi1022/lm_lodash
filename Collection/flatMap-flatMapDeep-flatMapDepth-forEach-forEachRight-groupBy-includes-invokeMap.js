let _ = require('lodash')

// groupBy
// 创建一个对象，key是遍历集合中的每个元素返回的结果，分组值的顺序是由他们出现在集合中的顺序确定的，每个键对应的值负责生成key的元素组成的数组
// 与countBy的区别是 countBy的是返回出现的次数，groupBy则是把返回数组中的值
// 1. collection (Array|Object): 一个用来迭代的集合。
// 2. [iteratee = _.identity](Array | Function | Object | string): 这个迭代函数用来转换key。
const groupBy = _.groupBy([1, 3, 4], function (i) {
  return i > 2
}) // { false: [ 1 ], true: [ 3, 4 ] }
const groupBy1 = _.groupBy(['one', 'two', 'three'], 'length') // => { '3': ['one', 'two'], '5': ['three'] }
const groupBy2 = _.groupBy([4.5, 6.2, 4.9, 4.1], Math.floor) // => { '4': [4.5, 4.9, 4.1], '6': [6.2]}

// includes
// 检查value值是否在集合中，如果集合是一个字符串，那么检查value是否在字符串中，否则使用SameValueZero做等值比较，如果指定的fromIndex是负数，那么从集合结尾开始检索
// collection(Array | Object | string): 要检索的集合。
// value(*): 要检索的值。
// [fromIndex = 0](number): 要检索的 索引位置。

const includes = _.includes([1, 2, 3], 1) // => true
const includes1 = _.includes([1, 2, 3], 1, 2) // => false
const includes2 = _.includes({
  a: 1,
  b: 2,
  c: 3
}, 1) // => true
const includes3 = _.filter([{
  a: 1,
  b: 2,
  c: 3
}, {
  a: 111,
  b: 2222,
  c: 3222
}], function (i) {
  return _.includes(i, 2) // => [{ a: 1, b: 2, c: 3 }] 把数组中含有2的对象返回
})
_.includes('pebbles', 'eb'); // => true

// invokeMap
// 调用path（路径）上的方法处理 collection(集合)中的每个元素，返回一个数组，包含每次调用方法得到的结果。
// 1. collection(Array | Object): 用来迭代的集合。
// 2. path(Array | Function | string): 用来调用方法的路径 或 者每次迭代调用的函数。
// 3. [args](...*): 调用每个方法的参数。
_.invokeMap([
  [5, 1, 7],
  [3, 2, 1]
], 'sort') // => [[1, 5, 7], [1, 2, 3]]
_.invokeMap([123, 456], String.prototype.split, '') // => [['1', '2', '3'], ['4', '5', '6']]
