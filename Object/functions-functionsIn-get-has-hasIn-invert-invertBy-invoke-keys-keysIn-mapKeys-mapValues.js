const _ = require('lodash')
// function
// 创建一个函数名称的数组，函数属性名称来自object对象自身可枚举属性
function Foo() {
    this.a = _.constant('a')
    this.b = _.constant('b')
}
Foo.prototype.c = _.constant('c')
const functions = _.functions(new Foo) // ['a', 'b']
const functionsIn = _.functionsIn(new Foo); // ['a', 'b', 'c']

// get
// 根据object对象的path路径获取值，如果解析value是undefined会以defaultValue取代
// 1. 要检索的对象
// 2. 要获取属性的路径
// 3. 如果解析值是undefined，这值会被返回
var object = { 'a': [{ 'b': { 'c': 3 } }] }
let get = _.get(object, 'a[0].b.c') // => 3
let get1 = _.get(object, ['a', '0', 'b', 'c']) // => 3
let get2 = _.get(object, 'abc', 'default') // => default

// has
// 检查path是否是object对象的直接属性
// 如果path存在，返回true,否则返回false
// 1. 要检索的对象
// 2. 要检查的路径path
let obj1 = {'a': {'b': 3}}
let other = _.create({'a': _.create({'b': 3})})
let has = _.has(obj1, 'a') // true
let has1 = _.has(obj1, ['a', 'b']) // true
let has2 = _.has(other, 'a') // false

// invert
// 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
// 1. 要键值倒置的对象
let obj2 = {'a' : 1, 'b': 2, 'c': 3, 'a': 4}
let invert = _.invert(obj2) // { '2': 'b', '3': 'c', '4': 'a' }

// invertBy
// 这个方法类似_.invert，除了倒置对象是collection（集合）中的每个元素经过interatee（迭代函数）处理后返回的结果，每个反转键相应反转的值是一个负责生成反转值key的数组
// 1. 要键值倒置的对象
// 2. 每次迭代时调用的函数
let obj3 = {'a': 1, 'b': 2, 'c': 1}
const invertBy = _.invertBy(obj3) // {'1': ['a', 'c'], '2': ['b']}
const invertBy1 = _.invertBy(obj3, function(val) {
    return 'group' + val // => {'group1': ['a','c'],'group2: '['b']}
})

// invoke
// 调用object对象path上的方法
// 1. 要检索的对象
// 2. 用来调用的方法路径
// 3. 调用的方法的参数
let obj4 = {'a': [{'b': {'c': [1,2,3,4]}}]}
let invode = _.invoke(obj4, 'a[0].b.c.slice', 1, 3) // => [2, 3]

// keys
// 创建一个 object 的自身可枚举属性名为数组。 
function Foo() {
    this.a = 1
    this.b = 2
}
Foo.prototype.c = 3
const keys = _.keys(new Foo) // => ['a', 'b']
const keys1 = _.keys('hi') // => ['0', '1']

// keysIn
// 创建一个object自身和继承的可枚举属性名为数组
//  非对象的值会被强制转换为对象。
const keysIn = _.keysIn(new Foo) // => ['a', 'b', 'c']

// mapKeys
// 反向版mapValues,这个方法创建一个对象，对象的值与object相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的
// 1. 要遍历的对象
// 2. 每次迭代时调用的函数
let obj5 = {a: 1, b: 2}  //变成 {a1: 1, b1: 5}
let mapKeys = _.mapKeys(obj5, function(val, key) {
    return key + val // {a1: 1, b1: 5}
})

// mapValues
// 创建一个对象，这个对象的key与object对象相同，值是通过iteratee运行object中每个自身可枚举属性名字字符串产生的
// 1. 要遍历的对象
// 2. 每次迭代时调用的函数
// 返回映射后的新对象

let users = {
    'fred': {'user': 'fred', age: 40}, 
    'pebbles': {'user': 'pebbles', age: 1}
}
// 变形为
// { fred: 40, pebbles: { user: 'pebbles', age: 1 } }
let mapValues = _.mapValues(users, function(val, key) {
    if (val.user === 'fred') {
        return val.age
    }
    return val // { fred: 40, pebbles: { user: 'pebbles', age: 1 } }
})





