//--------------------map---------------------------
function pow(x) {
    return x * x
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let res = arr.map(pow)
console.log(res)    //[1,  4,  9, 16, 25, 36, 49, 64, 81]

// ---------------------reduce-----------------------------
function add(x, y) {
    return x + y
}

res2 = arr.reduce(add)
// [x1, x2, x3, x4].reduce(f) = f(f(f(x1,x2),x3),x4)
console.log(res2)  // 45

// ------------------------使用场景简介-------------------------
// 将[1,3,5,7,9]变成13579
let arr2 = [1, 3, 5, 7, 9]
res3 = arr2.reduce(function (x, y) {
    return x * 10 + y
})
console.log(res3)   // 13579
res31 = arr2.reduce((x, y) => 10 * x + y)
console.log(res31)   // 13579

// ['1','2','3'] 字符串变整数
let arr4 = ['1', '2', '3']
res4 = arr4.map(parseInt)
console.log(res4)   // [ 1, NaN, NaN ]

res41 = arr4.map((x) => parseInt(x))
console.log(res41)  // [ 1, 2, 3 ]
