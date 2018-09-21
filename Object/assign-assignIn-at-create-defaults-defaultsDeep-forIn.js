const _ = require('lodash')
let obj1 = {a: 2, b: 3}
let obj2 = {a: 44, c :5, e: 33}
let obj3 = {f: 88, g :77}

// assign
// 分配来源对象的可枚举属性到目标对象上，来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性
// 注意: 这方法会改变 object
// 1. 目标对象
// 2. 来源对象
let assign = _.assign(obj1, obj2, obj3) // { a: 44, b: 3, c: 5, e: 33, f: 88, g: 77 }
function Foo() {
    this.a = 1
}
function Bar() {
    this.b = 2
}
Foo.prototype.c = 3
Bar.prototype.d = 4

let assign1 = _.assign({'a': 33}, new Foo,  new Bar) // { a: 1, b: 2 }

// assignIn
// 这个方法类似与_.assign，除了它会遍历并继承来源对象的属性
let assignIn = _.assignIn({'a': 12}, new Foo, new Bar) // { a: 1, c: 3, b: 2, d: 4 }

// at
// 创建一个数组，值来自object的paths路径相应的值
// 1. object (Object): 要迭代的对象。
// 2. [paths] (...(string|string[])): 要获取的对象的元素路径，单独指定或者指定在数组中。
let object = { 'a': [{b: 32, c: [{ d: 33, e: 33}, 5]}] }
let at = _.at(object, ['a[0].b', 'a[0].c[0].e', 'a[0].c[1]']) // [ 32, 33, 5 ]

// create
// 创建一个继承prototype的对象，如果提供了prototype，它的可枚举属性会被分配到创建的对象上
// 1. prototype (Object): 要继承的对象。
// 2. [properties] (Object): 待分配的属性。
function Shape() {
    this.x = 0
    this.y = 0
}
function Circle() {
    Shape.call(this)
}
Circle.prototype = _.create(Shape.prototype, {
    'constructor': Circle
})
let circle = new Circle
circle instanceof Circle // true
circle instanceof Shape // true

// defaults(object, [sources])
// 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。 
const defaults = _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })  // => { 'a': 1, 'b': 2 }

// defaultsDeep
// 这个方法类似_.defaults，除了它会递归分配默认属性。
const defaultDeep = _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }) // => {'a': {'b': 2, 'c': 3}}

// findKey
// 这个方法类似_.find。除了它返回最先被predicate判断为真值的key,而不是元素本身
// 返回匹配的key,否则返回undefined
// 1. 需要检索的对象
// 2. 每次迭代时调用的函数
let users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };
const findKey = _.findKey(users, o => o.age < 40) // barney
const findKey1 = _.findKey(users, {'age': 1, 'active': true}) // pebbles
const findKey2 = _.findKey(users, ['active', false]) // fred
const findKey3 = _.findKey(users, 'active') // barney

// findLastKey
// 这个方法类似_.findKey。 不过它是反方向开始遍历的。
const findLastKey = _.findLastKey(users, o => o.age < 40) // pebbles

// forIn // 原生的for in尽量不要用
// 使用iteratee遍历对象的自身和继承的可枚举属性，iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。
// 1. 要遍历的对象
// 2. 每次迭代时调用的函数
function Foo1() {
    this.a = 1
    this.b =2
}
Foo1.prototype.c = 3
_.forIn(new Foo, function(value,key) {
    console.log(key); // {a: 1, b: 2}
})



