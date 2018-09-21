let _ = require('lodash')
// after
// befroe的反向函数，此方法创建一个函数，当他被调用n或更多次之后将马上触发func
// 1. n(number):func方法应该在调用多少次后才执行
// 2. func(Function): 用来限定的函数
var saves = ['profile', 'settings'];

var done = _.after(saves.length, function () {
  console.log('done saving!');
});

_.forEach(saves, function (type) {
  asyncSave({ 'type': type, 'complete': done });
}) // => 在两个异步保存完成后 打印done saving


// ary

// before
// 1. n (number): 超过多少次不再调用func（愚人码头注：限制调用func 的次数）。
// 2. func(Function): 限制执行的函数。
jQuery(element).on('click', _.before(5, addContactToList));
// 最多允许将4个联系人添加到列表中

// bind

// bindKey

// curry
// 创建一个函数，该函数接收func的参数，要么调用func返回的结果，如果func所需参数已经提供，则直接返回func所执行的结果，或返回一个函数，接受余下的func参数的函数，可以使用func.length强制需要累积的参数个数
// 1. func(Function): 用来柯里化（curry）的函数。
// 2. [arity = func.length](number): 需要提供给 func 的参数数量。
var abc = function(a, b, c) {
  return [a, b, c]
}
let curried = _.curry(abc)
curried(1)(2)(3) // [1, 2, 3]
curried(1, 2)(3) // [1, 2, 3]
curried(1, 2, 3) // [1, 2, 3]

// curryRight
// 这个方法类似于curry，除了它接受参数的方式用_.partialRight代替_.partial
// 1. func(Function): 用来柯里化（curry）的函数。
// 2. [arity = func.length](number): 需要提供给 func 的参数数量。
var curried = _.curryRight(abc);
_.curried(3, 2, 1) // [1, 2, 3]
_.curried(2, 3)(1) // [1, 2, 3]
_.curried(3)(1, _)(2) // [1, 2, 3]

// debounce
// 创建一个debounced（防抖动）函数，该函数会从上一次被调用后，延迟wait毫秒后调用func方法，

// 1. func(Function)：要防抖动的函数
// 2. [wait](number):余姚延迟的毫秒数
JQuery(window).on('resize', _.debounce(calculateLayout, 150))
// input框输入时调用 handleSearchLpNameD
handleSearchLpNameD: _.debounce(function () {
  this.handleSearchLpName()
}, 400)

// 1. func (Function): 要延迟的函数。
// 2. wait(number): 要延迟的毫秒数。
// 3. [args](...*): 会在调用时传入到 func 的参数。
_.delay(function(text) {
  console.log(text);
}, 1000, 'later') // 一秒钟输出‘later’
