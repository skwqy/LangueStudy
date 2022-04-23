console.log("------------------typeof-------------------------")
console.log(typeof 1)       // number
console.log(typeof 3.14)    // number
console.log(typeof 'abc')   // string
console.log(typeof "123")   // string
console.log(typeof true)    // boolean
console.log(typeof undefined)   // undefined
console.log(typeof function () {
})   // function
console.log(typeof [1, 2, 3])     // object
console.log(typeof new Array()) // object
console.log(typeof new Date())  // object
console.log(typeof null)        // object
console.log(typeof new Map())   // object
console.log(typeof new Set())   // object

// typeof 根本无法区分Object类型中的Array、Date、Map、Set等类型
// 使用Object.prototype.toString 可以解决此问题

console.log("------------------constructor.name-------------------------")
int1 = 1
console.log(int1.constructor.name)       // Number
console.log(3.14.constructor.name)    // Number
console.log('abc'.constructor.name)   // String
console.log("123".constructor.name)   // String
console.log(true.constructor.name)    // Boolean
// console.log(undefined)   // 无法使用constructor.name
console.log(function () {
}.constructor.name)   // Function
console.log([1, 2, 3].constructor.name)     // Array
console.log(new Array().constructor.name) // Array
console.log(new Date().constructor.name)  // Date
// console.log(null)        // 无法使用constructor.name
console.log(new Map().constructor.name)   // Map
console.log(new Set().constructor.name)   // Set