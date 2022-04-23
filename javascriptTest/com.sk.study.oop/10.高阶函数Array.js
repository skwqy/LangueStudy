// Array还有一些其它的高阶函数
// -------------------every-----------------------
let arr = ['Apple', 'pear', 'orange']
// 判断是否每个元素的length都大于0
let isNotEmpty = arr.every(x => x.length > 0)
console.log(isNotEmpty) // true

// -------------------find----------------------
// 找到符合条件的第一个元素
let firstLowerWorld = arr.find(x => x.toLowerCase() === x)
console.log(firstLowerWorld)    // pear

// -------------------findIndex-----------------------
let firstLowerWorldIdx = arr.findIndex(x => x.toLowerCase() === x)
console.log(firstLowerWorldIdx) // 1
