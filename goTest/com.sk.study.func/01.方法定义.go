package main

import "fmt"

/**
定义函数的语法
	func funcName(param1 type1, param2 type2)(output1 out1，output2 out2){
		//......
		return value1，value2
	}
	A:func，定义函数的关键字
	B:funcName，函数名字
	C:(),函数的标志
	D:参数列表：形式参数用于接收外部传入函数中的数据
	E:返回值列表：函数执行后返回给调用处的结果。如果只有一个返回值，可以省略返回值的括号

	方法：method
		一个方法就是一个包含了接受者的函数，接受者可以是命名类型或结构体类型的一个值或者是一个指针。
		所有给定类型的方法属于该类型的方法集

	语法：
		func (接受者) 方法名(参数列表)(返回值列表){

		}

	总结：method，同函数类似，区别需要有接受者。（也就是调用者）

	方法 vs 函数
		A:意义
			方法：某个类别的行为功能，需要指定接受者调用
			函数：一段独立功能的代码，可以直接调用

		B:语法
			方法：方法名可以相同，只要接受者不同
			函数：命名不能冲突
*/
// 函数定义1
func hello(name string) string {
	return "hello " + name
}

// 函数定义2
func hello2() (string, int) {
	return "hello sk", 0
}

// Worker 方法定义
// 1.定义一个工人结构体
type Worker struct {
	name string
	age  int
	sex  string
}

// 2.定义行为方法
func (w Worker) work() {
	fmt.Println(w.name, "在工作...")
}

func main() {
	fmt.Println(hello("skwqy")) // hello skwqy

	w1 := Worker{name: "王二狗", age: 30, sex: "男"}
	w1.work() // 王二狗 在工作...
}
