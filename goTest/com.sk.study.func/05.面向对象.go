package main

import (
	"fmt"
)

func main() {
	/*
		OOP中的继承性：
			如果两个类(class)存在继承关系，其中一个是子类，另一个作为父类，那么：
			1.子类可以直接访问父类的属性和方法
			2.子类可以新增自己的属性和方法
			3.子类可以重写父类的方法(orverride，就是将父类已有的方法，重新实现)
		Go语言的结构体嵌套：
			1.模拟继承性：is - a
				type A struct{
					field
				}
				type B struct{
					A //匿名字段
				}
			2.模拟聚合关系：has - a
				type C struct{
					field
				}
				type D struct{
					c C //聚合关系
				}
	*/
	//1.创建Person类型
	var p1 IPerson = Person{name: "王二狗", age: 30}
	p1.eat()   // 父类的方法，吃窝窝头。。
	p1.study() // 父类的方法，学生学习啦。。。

	//2.创建Student类型
	var s1 IPerson = Student{Person{"Ruby", 18}, "千锋教育"}

	s1.eat()   //子类重写的方法：吃炸鸡喝啤酒。。 // 此时子类没有该方法时，就访问匿名字段的
	s1.study() //子类重写的方法，学生学习啦。。。
}

//1.定义一个"父类"
type Person struct {
	name string
	age  int
}

//2.定义一个"子类"
type Student struct {
	Person //结构体嵌套，模拟继承性
	school string
}

//3.方法
func (p Person) eat() {
	fmt.Println("父类的方法，吃窝窝头。。")
}
func (p Person) study() {
	fmt.Println("父类的方法，学生学习啦。。。")
}

func (s Student) study() {
	fmt.Println("子类重写的方法，学生学习啦。。。")
}

func (s Student) eat() {
	fmt.Println("子类重写的方法：吃炸鸡喝啤酒。。")
}

type IPerson interface {
	eat()
	study()
}
