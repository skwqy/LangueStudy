package main

func main() {

}

// 定义类型
type MySlice[T int | float32] []T

// 定义类型上的方法
//func (s MySlice[T]) Sum() T {
//	var sum T
//	for _, value := range s {
//		sum += value
//	}
//	return sum
//}

type A[T int | float32 | float64] struct {
}

// 方法可以使用类型定义中的形参 T
func (receiver A[T]) Add(a T, b T) T {
	return a + b
}
