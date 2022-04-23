package main

import "fmt"

// Go不支持默认参数、关键字参数、命名关键字参数
// 可变参数
func getSum(num1 int, nums ...int) int {
	sum := num1
	for i := 0; i < len(nums); i++ {
		sum += nums[i]
	}
	return sum
}

func main() {
	fmt.Println(getSum(1, 2, 3, 4)) //10
}
