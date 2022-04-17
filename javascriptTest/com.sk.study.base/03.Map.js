// 方式一：推荐
nameAlias = new Map()
nameAlias.set("苏轼", "东坡居士")
nameAlias.set("诸葛亮", "孔明")
nameAlias["周润发"] = "发哥"

console.log(nameAlias.constructor) // [Function: Map]
console.log(nameAlias)
// Map(2) { '苏轼' => '东坡居士', '诸葛亮' => '孔明', '周润发': '发哥' }
// 2：表示Map对象有两个元素，key分别是苏轼、诸葛亮。 周润发这个属性是作为Object属性，并不是Map的key


// 方式二： 类似Map，但其实是Object
nameAlias2 = {"苏轼": "东坡居士"}
nameAlias2["诸葛亮"] = "孔明"
console.log(nameAlias2.constructor)  // [Function: Object]
console.log(nameAlias2)  // { '苏轼': '东坡居士', '诸葛亮': '孔明' }

console.log("---------------------遍历----------------------------")
nameAlias3 = new Map([["test", "testValue"]])
nameAlias3.set("苏轼", "东坡居士")
nameAlias3.set("诸葛亮", "孔明")
nameAlias3["周润发"] = "发哥"

// 方式一：能遍历Map中的key和value，无法遍历Object的key、value属性
for (let item of nameAlias3) {
    console.log(item[0] + ":" + item[1])
}

// 方式二：能遍历Map中的key和value，无法遍历Object的key、value属性
nameAlias3.forEach(function (value, key, map) {
    console.log(key + ":" + value)
})

// 无法遍历Map中的key和value，能遍历Object的key、value属性
for (let key in nameAlias3) {
    console.log(key + ":" + nameAlias3[key])
}

console.log("------------------增删改查--------------------")

nameAlias = new Map()
// 1.增加
nameAlias.set("苏轼", "东坡居士")
nameAlias.set("诸葛亮", "孔明")

// 2.删除
nameAlias.delete("诸葛亮")

// 3.查询
nameAlias.has("苏格兰")  // 判断是是否存在
nameAlias.get("苏格兰")  // 如果不存在，返回 undefined

console.log(nameAlias)





