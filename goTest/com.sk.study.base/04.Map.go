package main

import "fmt"

func main() {
	// 方式一：先声明，在创建
	var nameAlias map[string]string // 只有声明，没有初始化，值为nil
	nameAlias = make(map[string]string)
	nameAlias["苏轼"] = "东坡居士"
	nameAlias["诸葛亮"] = "孔明"

	// 方式二：
	var nameAlias2 = map[string]string{"苏轼": "东坡居士", "诸葛亮": "孔明"}
	fmt.Println(nameAlias2) // map[苏轼:东坡居士 诸葛亮:孔明]

	fmt.Println("--------------遍历---------------------")
	var nameAlias3 = map[string]string{"苏轼": "东坡居士", "诸葛亮": "孔明"}
	for k, v := range nameAlias3 {
		fmt.Println(k, ":", v)
	}

	fmt.Println("--------------增删改查---------------------")
	var nameAlias4 = map[string]string{}
	// 1. 增加
	nameAlias4["苏轼"] = "东坡居士" // key不存在则增加，否则修改
	nameAlias4["诸葛亮"] = "孔明"

	// 2. 删除
	delete(nameAlias4, "苏轼")

	// 3. 查询
	alias := nameAlias4["诸葛亮"]      // 方式一：直接获取
	alias2, ok := nameAlias4["诸葛亮"] // 方式二：判断获取
	if ok {
		fmt.Println(alias2)
	}
	fmt.Println(alias)
	fmt.Println(nameAlias4)

}
