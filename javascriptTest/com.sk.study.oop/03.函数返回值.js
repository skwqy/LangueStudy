// ----------------------返回对象------------------------
function getAge() {
    return 10
}

age = getAge()
console.log(age.constructor.name)     // Number
console.log(3.14.constructor.name)    // Number

function getNames() {
    return ["sk", "ssk"]
}

names = getNames()
console.log(names.constructor.name)   // Array

// ----------------------默认返回------------------------
function get_default() {

}

default1 = get_default()
console.log(default1)   // undefined

// ----------------------返回函数------------------------
function inc() {
    let i = 0
    return function fun() {
        return i++
    }
}

fun1 = inc()
console.log(fun1.constructor.name)  // Function
console.log(fun1()) // 0
console.log(fun1()) // 1
