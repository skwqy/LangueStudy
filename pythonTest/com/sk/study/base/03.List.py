# coding:utf-8

names = ["王安石", "苏轼", 10, True, [1, 2]]
print(names)  # ['王安石', '苏轼', 10, True, [1, 2]]

names = ["王安石", "苏轼"]

# 方式一
for name in names:
    print(name)

# 方式二：带有index (0, '王安石') (1, '苏轼')
for name in enumerate(names):
    print(name)

# 方式三：
for name in iter(names):
    print(name)

# 方式四
for i in range(len(names)):
    print(i, names[i])

print("---------------------list增删改-----------------------")
names = ["王安石"]
# 1. 增加元素
names.append("苏轼")  # 方式一：在末尾添加
names.insert(0, "柳宗元")  # 方式二：在指定位置添加
print(names)  # ['柳宗元', '王安石', '苏轼']

# 2. 删除元素
names.pop()  # 方式一：在末尾删除
print(names)  # ['柳宗元', '王安石']
names.pop(0)  # 方式二：在指定位置删除
print(names)  # ['王安石']

# 3. 修改元素
names[0] = "周润发"
print(names)  # ['周润发']

print("-------------------sort----------------------------")
numbers = [4, 6, 8, 9, 1, 2]
numbers.sort()
print(numbers)  # [1, 2, 4, 6, 8, 9]
