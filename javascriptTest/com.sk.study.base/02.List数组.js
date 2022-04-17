// JavaScript 的Array可以包含任意数据类型

// 方式一：推荐
let arr = [1, 2, 3.14, 'Hello', null, true, [2, false, 'sk']]
console.log(arr) // [ 1, 2, 3.14, 'Hello', null, true, [ 2, false, 'sk' ] ]

// 方式二：不推荐
let arr2 = new Array()  // 不推荐
console.log(arr2) // []

console.log("------------------------数组遍历----------------------------")

let names = ["王安石", "苏轼"]
// 方式一：for/while 根据数组长度遍历
for (let i = 0, len = names.length; i < len; i++) {
    console.log(names[i])
}

// 方式二： for...in 可以遍历对象/数组。遍历数组时也会遍历非数字键名，所以不推荐for...in遍历数组
for (let key in names) {
    console.log(names[key])
}

// 方式三：for...of (ES6)
for (let name of names) {
    console.log(name)
}

// 方式四：forEach()方法
names.forEach(name => console.log(name))

console.log("--------------------数组的增删改-----------------------------")
names = ["王安石"]
// 1. 增加元素
names.push("苏轼")    // 方式一：在末尾添加元素
names.unshift("柳宗元") // 方式二：在头部增加元素
console.log(names)  // [ '柳宗元', '王安石', '苏轼' ]

// 2. 删除元素
names.pop()  // 方式一：从末尾删除元素
names.shift()   // 方式二：从头部删除数据
console.log(names) // [ '王安石' ]

// 3. 修改元素
names[0] = "周润发"
console.log(names)  // [ '周润发' ]

console.log("------------------sort-------------------------")
numbers = [4, 6, 8, 9, 1, 2, 2]
numbers.sort()
console.log(numbers)    // [ 1, 2, 2, 4, 6, 8, 9 ]
numbers.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1
    } else {
        return 0;
    }
})
console.log(numbers)  // [9, 8, 6, 4, 2, 2, 1]

