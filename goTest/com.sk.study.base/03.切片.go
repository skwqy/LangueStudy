package main

import (
	"fmt"
	"sort"
)

func main() {
	// 1. 数组
	var arr [3]string

	// 2.切片
	// 方式一：
	var s1 []string                                 // 注意没有长度，有长度的是数组，没有长度的是切片slice
	fmt.Printf("容量:%d， 长度:%d \n", cap(s1), len(s1)) // 容量:0， 长度:0

	// 方式二：和方式一没啥区别，就是创建并初始化
	s2 := []string{"王安石", "苏轼"}
	fmt.Printf("容量:%d， 长度:%d \n", cap(s2), len(s2)) // 容量:2， 长度:2
	fmt.Printf("%T,%T\n", arr, s2)                  // [3]string,[]string

	// 方式三：指定长度和容量
	s3 := make([]string, 3, 8)
	fmt.Printf("容量:%d， 长度:%d \n", cap(s3), len(s3)) // 容量:8， 长度:3

	// 特殊情况，如果切片类型为interface{}时，可以存放任意的数据类型
	s4 := []interface{}{1, 2, 3.14, "王安石"}
	fmt.Println(s4) // [1 2 3.14 王安石]

	fmt.Println("---------------切片遍历------------------")
	names := []string{"王安石", "苏轼"}
	// 方式一
	for i := 0; i < len(names); i++ {
		fmt.Println(names[i])
	}

	// 方式二
	for index, name := range names {
		fmt.Println(index, name)
	}

	fmt.Println("----------------切片增删改------------------------")
	// 1. 增加元素
	names = []string{}
	names = append(names, "王安石", "曾巩")             // 方式一：在末尾插入
	fmt.Printf("指向地址:%p， 切片内容：%s\n", names, names) //指向地址:0xc00005a060， 切片内容：[王安石 曾巩]
	names = append(names[:1], "苏轼")                // 方式二：在指定位置插入，插入时会覆盖后面位置元素
	fmt.Printf("指向地址:%p， 切片内容：%s\n", names, names) //指向地址:0xc00005a060， 切片内容：[王安石 苏轼]

	// 2. 删除元素
	names = append(names, "柳宗元")
	fmt.Printf("指向地址:%p， 切片内容：%s\n", names, names) // 指向地址:0xc0000200c0， 切片内容：[王安石 苏轼 柳宗元]
	names = append(names[:1], names[2:]...)        // 删除第二个元素 [0,1)+[2,结束+1)
	fmt.Printf("指向地址:%p， 切片内容：%s\n", names, names) // 指向地址:0xc0000200c0， 切片内容：[王安石 柳宗元]

	// 3. 修改元素
	names[1] = "李元龙"
	fmt.Println(names) // [王安石 李元龙]

	fmt.Println("--------------------sort------------------------")
	numbers := []int{4, 6, 8, 9, 1, 2}
	sort.Ints(numbers)
	fmt.Println(numbers) // [1 2 4 6 8 9]
}
