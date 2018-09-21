let _ = require('lodash')

// map
// 创建一个数组，value值是遍历集合中的每个元素后返回的结果
// 1. collection(Array | Object): 用来迭代的集合。
// 2. [iteratee = _.identity](Array | Function | Object | string): 每次迭代调用的函数。
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
function square(n) {
  return n * n;
}
 
const map = _.map([4, 8], square); // => [16, 64]
const map1 = _.map({ 'a': 4, 'b': 8 }, square); // => [16, 64]
const map2 = _.map(users, function(i, index) {
  return {
    ...i,
    'b': 1
  }
}) // => [ { user: 'barney', b: 1 }, { user: 'fred', b: 1 } ]
// 把users中的user属性的值取出来放到数组中
const map3 = _.map(users, function(i) {
  return _.get(i, 'user')
}) // => [ 'barney', 'fred' ]

// orderBy
// 此方法类似于sortBy除了它允许指定迭代函数结果如何排序，如果没制定排序，所有值以升序排序，否则desc降序排序
// 1. collection (Array|Object): 用来迭代的集合。
// 2. [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 排序的迭代函数。
// 3. [orders] (string[]): iteratees迭代函数的排序顺序。
var users2 = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
// 以 `user` 升序排序 再  `age` 以降序排序。
const orderBy = _.orderBy(users2, ['user', 'age'], ['asc', 'desc'])
// => [ { user: 'barney', age: 36 },
//   { user: 'barney', age: 34 },
//   { user: 'fred', age: 48 },
//   { user: 'fred', age: 40 } ]


// partition
// 创建一个分成两组的元素数组，第一组为真，第二组为假
// 1. collection (Array|Object): 用来迭代的集合。
// 2. [predicate = _.identity](Array | Function | Object | string): 每次迭代调用的函数
var users3 = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
const partition = _.partition(users3, function(o) { return o.active; }) // => objects for [[fred],['barney', 'pebbles']]
const partition1 = _.partition(users3, 'active') // => objects for [['fred'], ['barney', 'pebbles']]
const partition2 = _.partition(users3, {'age': 1,  'active': false}) // => objects for [['pebbles'], ['barney', 'fred']]

// reduce
// 压缩集合为一个值，通过遍历集合中的每个元素，每次返回的值会作为下一次迭代使用的第一个参数。如果没有提供累加器，则集合中的第一个元素作为初始值。

var users4 = [
  { 'user': 'barney',  'id': 36, 'active': false },
  { 'user': 'fred',    'id': 40, 'active': true },
  { 'user': 'pebbles', 'id': 14,  'active': false }
];
// 变形成{36: false}
const reduce = _.reduce(users4, (obj, i) => {
  return {
    ...obj,
    [i.id]: i.active
  } 
}, {}) // { '14': false, '36': false, '40': true }

// 从0开始，求id累加的和
const reduce1 = _.reduce(users4, (res, value, index, arr) => {
  return res + value.id
}, 0) // 90

const reduce2 = _.reduce([1, 2, 3], (sum, n) => sum + n) // 6

// reduceRight
// 这个方法类似 _.reduce ，除了它是从右到左遍历collection（集合）中的元素的
var array = [[0, 1], [2, 3], [4, 5]];

const reduceRight = _.reduceRight(array, (res, i) => {
  return res.concat(i) // [ 4, 5, 2, 3, 0, 1 ]
})

// reject
// _.filter的反向方法,返回部位true的元素
// 1. collection (Array|Object): 用来迭代的集合。
// 2. 每次迭代调用的函数。

// 以下值的写法同等
const reject = _.reject(users4, (i) => {
  return i.active //
})
const reject2 = _.reject(users4, 'active')
const reject3 = _.reject(users4, ['active', true])
const reject4 = _.reject(users4, {'active': true})
console.log(reject2);
// [ { user: 'barney', id: 36, active: false },
  // { user: 'pebbles', id: 14, active: false } ]

// sample
// 从collection（ 集合） 中获得一个随机元素。
// 1. collection(Array | Object): 要取样的集合。
const sample = _.sample([1,2,3,4]) // 2 随机的


// sampleSize
// 1. 从collection（集合）中获得 n 个随机元素。
const sampleSize = _.sampleSize([1,2,3,4], 2) // [2,4]

// shuffle
// 创建一个被打乱的集合
// 1. collection ：要被打乱的集合
const shuffle = _.shuffle([1,2,3,4]) // [4,2,1,3]

// size
// 返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
const size = _.size([1,2,3]) // => 3
const size1 = _.size({a: 1, b:2}) // => 2
const size3 = _.size('pebbles') //  => 7

// some
// 检查集合中的元素是否存在任意真值的元素,一旦返回true，遍历就停止
// _.some(collection, [predicate = _.identity])
// 1. collection (Array|Object): 用来迭代的集合。
// 2. [predicate = _.identity](Array | Function | Object | string): 每次迭代调用的函数。
_.some([null, 0, 'yes', false], Boolean); // true

var users5 = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];
const some = _.some(users5, 'active') // => true
const some1 = _.some(users5, ['active', false]) // true

// sortBy
// 创建一个元素数组，一iteratee处理的结果生序排序，
// 1. 用来迭代的集合
// 2. (Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): 这个函数决定排序。
_.sortBy([1, 5, 2, 13, 24]) // => [ 1, 2, 5, 13, 24 ]
