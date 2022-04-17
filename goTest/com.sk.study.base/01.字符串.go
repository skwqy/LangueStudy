package main

import (
	"fmt"
	"strings"
)

func main() {
	// 方式一：通过双引号创建字符串
	var name string = "字符串"

	// 方式二：通过反引号(``)来创建，也称为原始文本。不支持转义字符，可以跨越多行，可以包含除反引号之外的任何字符。
	// 通常，它用于在正则表达式或HTML中编写多行消息。
	var name2 string = `hello
skwqy`
	println(name)
	println(name2)

	println("----------------字符子串-----------------------")
	var oriStr = "012345678"
	println(oriStr[1:])  // 12345678
	println(oriStr[2:5]) // 234
	println(oriStr[:5])  // 01234

	println("-----------------字符串分割------------------------------")
	findStr := "123:456:789"
	arr := strings.Split(findStr, ":")
	fmt.Println(arr) // [123 456 789]

	println("-----------------字符串查找------------------------------")
	findSubStr := "123:456:789:我爱中国"
	index := strings.IndexAny(findSubStr, ":")
	fmt.Println(findSubStr[index:]) // :456:789:我爱中国
	lastIndex := strings.LastIndexAny(findSubStr, ":")
	fmt.Println(findSubStr[lastIndex:]) //:我爱中国

}
