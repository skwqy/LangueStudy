/*
 Lambda表达式语法：
    (参数1,参数2,...) => {代码块}
        注意：
            1、Lambda表达式由 形参列表、=>、代码块组成，=>用来将参数和代码块分隔开，不能省略；
            2、当只有一个参数时，小括号()可以省略；
            3、当只有一条语句时，大括号{}可以省略；代码块只有一条return语句时，可省略return关键字；
 */

let fn = x => x * x
console.log(fn.constructor.name)    // Function
console.log(fn(2))  // 4