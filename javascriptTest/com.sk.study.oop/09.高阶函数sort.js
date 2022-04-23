let arr = [2, 1, 9, 6, 4, 8, 5, 3, 7]

let res1 = arr.sort((a, b) => {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
console.log(res1)   // [1,2,3,4,5,6,7,8,9]

let res2 = arr.sort((a, b) => {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
console.log(res2)   // [9,8,7,6,5,4,3,2,1]