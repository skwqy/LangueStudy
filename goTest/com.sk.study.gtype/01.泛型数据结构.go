package main

import "fmt"

func main() {
	// 1、泛型切片：可以使用int float32 float64类型实例化
	type Slice[T int | float32 | float64] []T

	var a Slice[int] = []int{1, 2, 3, 4}
	fmt.Printf("Type: %T", a)

	// 2、泛型map，可以使用int string实例化key，float32 float64 string int实例化value
	type Map[K int | string, V float32 | float64 | string | int] map[K]V

	// 3、泛型结构体。可用 int 或 sring 类型实例化
	type MyStruct[T int | string] struct {
		Name string
		Data T
	}

	// 4、泛型接口：(关于泛型接口在后半部分会详细讲解）
	type IPrintData[T int | float32 | string] interface {
		Print(data T)
	}

	// 5、泛型通道：可用类型实参 int 或 string 实例化
	type MyChan[T int | string] chan T
}
