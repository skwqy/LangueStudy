// https://es6.ruanyifeng.com/#docs/destructuring
//--------------序列(List、Array)按位置解构---------------------
let arr = ['Hello', 'JavaScript', 'ES6']
let [x, y, z] = arr
console.log(x, y, z)  // Hello JavaScript ES6  // 全量获取
let [, yy] = arr
console.log(yy)  // JavaScript  // 按需获取

let [xxx, [, yyy]] = ['Hello', ['JavaScript', 'ES6']]
console.log(xxx, yyy)    // Hello ES6    // 按层次、按需获取

//--------------对象按key解构---------------------
console.log("----------------------------------------------")
let person = {name: '小明', age: 20, gender: 'male'}
let {name, age, father} = person
console.log(name, age, father)   // 小明 20 undefined

let person2 = {name2: '小明', age: 20, gender: 'male', address: {city: 'NanJing', zipcode: '025'}}
let {name2, address: {city}} = person2
console.log(name2, city)    // 小明 NanJing

// -------------------字符串解构赋值--------------------------
const [a, b, c, d] = 'HELLO'
console.log(a, b, c, d)    // H E L L

// -------------------数值或布尔解构赋值-----------------------------
let {toString: s} = 123
console.log(s === Number.prototype.toString)  // true
let {toString: ss} = true
console.log(ss === Boolean.prototype.toString)    // true

// ---------------------函数参数解构--------------------------
function add([x, y]) {
    return x + y;
}

console.log(add([1, 2])); // 3


// -------------------------使用场景-----------------------------
console.log("-------------------------------------------")
// 场景1：交换两个变量值
let num1 = 1, num2 = 2;
[num1, num2] = [num2, num1]
console.log(num1, num2) // 2 1

// 场景2：从函数中返回多个值
function example() {
    return [1, 2, 3];
}

let [aa, bb, cc] = example();

// 返回一个对象

function example2() {
    return {
        foo: 1,
        bar: 2
    };
}

let {foo, bar} = example2();

// 场景3：函数参数的定义
function buildDate({year, month, day, hour = 0, minute = 0, second = 0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}

console.log(buildDate({year: 2011, month: 4, day: 23})) // 2011-04-22T16:00:00.000Z
// 场景4：提取JSON数据

// 场景5：函数参数的默认值,同函数定义中，指定了minute、second等的默认值
// 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

// 场景6：遍历Map结构
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// 场景7：输入模块的指定方法
// const {SourceMapConsumer, SourceNode} = require("source-map");


