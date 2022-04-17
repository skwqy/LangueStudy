# coding:utf-8

nameAlias = {"苏轼": "东坡居士"}
nameAlias["诸葛亮"] = "孔明"
print(nameAlias)  # {'苏轼': '东坡居士', '诸葛亮': '孔明'}

print("----------------遍历----------------------")
nameAlias = {"苏轼": "东坡居士", "诸葛亮": "孔明"}
# 方式一：
for key in nameAlias:
    print(key + ":" + nameAlias[key])

# 方式二 推荐
for key, value in nameAlias.items():
    print(key + ":" + value)

print("----------------增删改查----------------------")
# 1. 增加
nameAlias2 = {"诸葛亮": "孔明"}  # 方式一：创建就增加
nameAlias2["苏轼"] = "东坡居士"  # 方式二：添加

# 2. 删除
nameAlias2.pop("诸葛亮")

# 3. 获取
nameAlias2["苏轼"]  # 方式一：不推荐，如果key不存在，会抛TypeError异常
nameAlias2.get("苏轼")  # 方式二：推荐，如果可以不存在，返回None
nameAlias2.get("诸葛亮", "孔明")  # 方式三：推荐，如果key不存在，返回指定的值
print(nameAlias2)
