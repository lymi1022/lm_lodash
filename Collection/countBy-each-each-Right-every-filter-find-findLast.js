let _ = require('lodash')
let arr = [1,3,5,7]

// countBy
// 创建一个组成对象， key（ 键） 是经过 iteratee（ 迭代函数） 执行处理collection中每个元素后返回的结果， 每个key（ 键） 对应的值是 iteratee（ 迭代函数） 返回该key（ 键） 的次数
const countBy = _.countBy([6.1, 4.2, 6.3], Math.floor) // => { '4': 1, '6': 2 }
const countBy1 = _.countBy(['one', 'two', 'three'], 'length'); // { '3': 2, '5': 1 }
const countBy2 = _.countBy([1, 2, 4, 2, 2], i => i === 2) // => { false: 2, true: 3}

// forEach
// 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index | key, collection) 。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。 
// 别名
// _.each
// 1. collection (Array|Object): 一个用来迭代的集合。
// 2. [iteratee = _.identity](Function): 每次迭代调用的函数。

_.forEach(arr, function (v) {
  // console.log(v); // => 1, 3, 5, 7
})

_.forEach([{
  a: 1
}, {
  b: 2
}], function (val, index, arr) {
  console.log(val);
  console.log(index);
})
// { a: 1 }
// 0
// { b: 2 }
// 1

// _.forEachRight 
// _.forEachRight 是从右到左遍历集合中每一个元素的。
_.forEachRight([1, 2], function (value) {
  console.log(value); // 2, 1
});

// filter
// 遍历集合元素，返回断言函数返回真值的所有元素的数组
// 1. collection(Array|Object): 一个用来迭代的集合
// 2. 每次迭代调用的函数
// 返回：新的过滤后的数组

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];
const filter = _.filter(users, function(o){
  return o.active // => [ { user: 'barney', age: 36, active: true } ]
})

const filter1 = _.filter(users, function(k, index) {
  console.log(k);
  console.log(index);
})
// { user: 'barney', age: 36, active: true }
// 0
// { user: 'fred', age: 40, active: false }
// 1

const filter2 = _.filter(users, function(v, index) {
  return v.user === 'fred' // => [ { user: 'fred', age: 40, active: false } ]
}) 

// find
// 返回断言函数第一个返回真值的第一个元素
//  返回匹配元素， 否则返回 undefined。
// 1. collection (Array|Object): 一个用来迭代的集合。
// 2. [predicate = _.identity](Array | Function | Object | string): 每次迭代调用的函数。
// 3. [fromIndex = 0](number): 开始搜索的索引位置
var users1 = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
const find = _.find(users1, 'user') // => { user: 'barney', age: 36, active: true }
const find1 = _.find(users1, function(o) { return o.user}) // => { user: 'barney', age: 36, active: true }
// find1与find2的值一样可以缩写成find1的形式
const find2 = _.find(users1, ['user', 'fred']) // => [{ 'user': 'fred',    'age': 40, 'active': false }]
const find3 = _.find(users1, { 'age': 1, 'active': true }) // => [{ user: 'pebbles', age: 1, active: true }]

// findLast
// 与find不同之处为从右往左遍历集合元素
_.findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1; // => 3
});

