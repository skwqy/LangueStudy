// ----------------------------默认参数-------------------------------
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

// 注意1：参数变量是默认声明的，所以不能用let或const再次声明。
// 注意2：使用参数默认值时，函数不能有同名参数。
// 注意3：定义了默认值的参数，应该是函数的尾参数
// 注意4：参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let x = 99;

function foo(p = x + 1) {
    console.log(p);
}

foo() // 100

x = 100;
foo() // 101

// ----------------------------可变(rest)参数-------------------------------
console.log("-----------------------------------")

function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
    }
    return sum;
}

console.log(add(2, 5, 3)) // 10
// 注意：rest 参数之后不能再有其他参数（即只能是最后一个参数）

function add2(first = 0, ...values) {
    let sum = first;
    for (let val of values) {
        sum += val;
    }
    return sum;
}

console.log(add2(2, 5, 3)) // 10


