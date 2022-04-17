// 方式一：单引号，字符串内容可以包含双引号
var name1 = '请叫我"老大哥"'

// 方式二：双引号，字符串内容可以包含单引号
let name2 = "请叫我'老大哥'"

// 方式三：反引号,多行字符串，可以包含单、双引号
const name3 = `请叫我
"老大哥"
'OK'`

console.log(name1)
console.log(name2)
console.log(name3)

console.log("-----------------子字符串---------------------")
let oriStr = "012345678"
console.log(oriStr.substring(1))        // 12345678
console.log(oriStr.substring(2, 5))      // 234

console.log("-----------------字符串分割---------------------")
findStr = "123:456:789"
arr = findStr.split(":")
console.log(arr)    // [ '123', '456', '789' ]

console.log("-----------------查找子串---------------------")
findSubStr = "123:456:789:我爱中国"
index = findSubStr.indexOf(":")
console.log(findSubStr.substring(index)) // :456:789:我爱中国
lastIndex = findSubStr.lastIndexOf(":")
console.log(findSubStr.substring(lastIndex)) //:我爱中国
