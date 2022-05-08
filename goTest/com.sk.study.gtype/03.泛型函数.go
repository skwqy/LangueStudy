package main

import "fmt"

func main() {
	var result int = Add[int](1, 2) // 传入类型实参int，计算结果为 3
	fmt.Println(result)

	var fResult float32 = Add[float32](1.0, 2.0) // 传入类型实参float32, 计算结果为 3.0
	fmt.Println(fResult)

	// 或许你会觉得这样每次都要手动指定类型实参太不方便了。所以Go还支持类型实参的自动推导：
	result = Add(1, 2) // 1，2是int类型，编译请自动推导出类型实参T是int
	fmt.Println(result)
	var f64Result float64 = Add(1.0, 2.0) // 1.0, 2.0 是浮点，编译请自动推导出类型实参T是float32
	fmt.Println(f64Result)

	//Add[string]("hello", "world") // 错误。因为泛型函数Add的类型约束中并不包含string
}
func Add[T int | float32 | float64](a T, b T) T {
	return a + b
}
