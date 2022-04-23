package main

import "fmt"

func main() {
	// 将匿名函数赋值给变量
	func4 := func(a, b int) int {
		return a + b
	}
	fmt.Printf("%T\n", func4) //func(int, int) int
	res1 := func4(10, 100)
	fmt.Println(res1) // 110

	// 函数调用时，直接定义匿名函数
	res3 := oper(200, 300, func(a int, b int) int {
		return a + b
	})
	fmt.Println(res3) // 500
}

// 和Python、JavaScript一样，可以直接将函数作为普通参数，但是却能看到函数声明，代码阅读起来比Python、JavaScript清洗
func oper(a, b int, fun func(int, int) int) int {
	return fun(a, b)
}
