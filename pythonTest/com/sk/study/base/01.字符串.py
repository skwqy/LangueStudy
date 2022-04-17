# coding:utf-8

# 方式一： 单引号，单行,可以包含双引号
name = '我叫"老大哥"'
# 方式二： 双引号，单行，可以包含单引号
name2 = "请叫我'老大哥'"
# 方式三：三个单引号，多行，可以包含单、双引号
name3 = '''请叫我
"老大哥'你好'"'''
# 方式四： 三个双引号，多行，可以包含单、双引号
name4 = """请叫我
'老大哥'
"你好"
"""
print(name)
print(name2)
print(name3)
print(name4)

# 原始字符串,字符串不会转义，原样输出
# 方式一：不能包含单引号(')
rname = r'test\t123'
# 方式一：不能包含双引号(")
rname2 = R"test\t123"
# 方式三：可以包含单、双引号
rname3 = r'''姓名'''
# 方式四：可以包含单、双引号
rname4 = R"""姓名"""

print(type(rname))

print("-----------------子字符串---------------------")
oriStr = "012345678"
print(oriStr[1:])  # 12345678
print(oriStr[2:5])  # 234
print(oriStr[:5])  # 01234

print("-----------------字符串分割---------------------")
findStr = "123:456:789"
arr = findStr.split(":")
print(arr)  # ['123', '456', '789']

print("-----------------查找字符串---------------------")
findSubStr = "123:456:789:我爱中国"
index = findSubStr.find(":")
print(findSubStr[index:])  # :456:789:我爱中国
lastIndex = findSubStr.rfind(":")
print(findSubStr[lastIndex:])  # :我爱中国
