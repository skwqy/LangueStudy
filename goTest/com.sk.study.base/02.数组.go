package main

import "fmt"

func main() {
	// 方式一：指定容量，创建
	var names [3]string
	names[0] = "小明"
	names[1] = "王二狗"
	fmt.Println(names)                  // [小明 王二狗 ]
	fmt.Println(len(names), cap(names)) // 3 3

	// 方式二：指定容量，创建并初始化
	var name2 [3]string = [3]string{"王二狗", "李小花", "张三丰"}
	fmt.Println(name2) // [王二狗 李小花 张三丰]

	// 方式三：指定容量，按照索引进行初始化
	name3 := [3]string{1: "郭靖", 2: "黄蓉"}
	fmt.Println(name3) // [ 郭靖 黄蓉]

	// 方式四：匹配容量，
	name4 := [...]string{"0", "1", "2", "3"}
	fmt.Println(name4)                  // [0 1 2 3]
	fmt.Println(len(name4), cap(name4)) // 4 4

	// 方式五：匹配容量，指定索引
	name5 := [...]string{0: "姓名0", 6: "姓名6"}
	fmt.Println(name5)                  // [姓名0      姓名6]
	fmt.Println(len(name5), cap(name5)) // 7 7

	println("------------------数组遍历--------------------")
	namess := [...]string{"欧阳修", "苏轼", "王安石"}
	// 方式一
	for i := 0; i < len(namess); i++ {
		fmt.Println(namess[i])
	}

	// 方式二
	for index, name := range namess {
		fmt.Println(index, name)
	}

}
