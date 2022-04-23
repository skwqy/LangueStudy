// 方式一：
names = new Set()
names.add("苏轼")
names.add("王安石")
names.add("王安石")
console.log(names)  // Set(2) { '苏轼', '王安石' }

// 方式二：
names = new Set(["苏轼", "周润发"])
console.log(names)  // Set(2) { '苏轼', '周润发' }

console.log("-------------------遍历------------------------")
// 方式1：
for (let name of names) {
    console.log("方式1：", name)
}

// 方式2：
names.forEach(name => console.log("方式2：", name))

// 方式3：
for (let name of names.keys()) {
    console.log("方式3：", name)
}

// 方式4：
for (let name of names.values()) {
    console.log("方式4：", name)
}

// 方式5：
for (let item of names.entries()) {
    console.log("方式5：", item[0], "-", item[1]) //方式5： 苏轼 - 苏轼
}

console.log("--------------------增删改查------------------------------")
names = new Set()
// 1.增加
names.add("周润发")
console.log(names)  // Set(1) { '周润发' }

// 2.删除
names.delete("周润发")
console.log(names)  // Set(0) {}


