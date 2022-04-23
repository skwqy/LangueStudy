let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 遍历：无返回值
arr.forEach(x => console.log(x))

// 过滤：返回true保留、返回false丢弃
res = arr.filter(x => x % 2 === 0)
console.log(res)  // [ 2, 4, 6, 8, 10 ]