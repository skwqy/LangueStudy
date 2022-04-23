package main

import "fmt"

func main() {
	// 返回对象
	p := getPerson("sk", 20)
	fmt.Println(p) // {sk 20}

	// 返回指针
	ptr := getPerson2("skwqy", 20)
	fmt.Println(ptr) //&{skwqy 20}

	// 返回函数
	fun := increment()
	fmt.Printf("%T\n", fun) // func() int

	// 返回多个值
	zhouchang, area := rectangle(3, 4)
	fmt.Println(zhouchang, area) // 14 12
}

// 返回对象/struct
func getPerson(name string, age int) Person1 {
	return Person1{name: name, age: age}
}

// 返回指针
func getPerson2(name string, age int) *Person1 {
	return &Person1{name: name, age: age}
}

// 返回函数
func increment() func() int { // 外层函数
	// 1.定义了一个局部变量
	i := 0
	// 2.定义了一个匿名函数，给变量自增并返回
	fun := func() int {
		i++
		return i
	}
	return fun
}

// 返回多个结果
func rectangle(len, wid float64) (float64, float64) {
	peri := (len + wid) * 2
	area := len * wid
	return peri, area
}

type Person1 struct {
	name string
	age  int
}
