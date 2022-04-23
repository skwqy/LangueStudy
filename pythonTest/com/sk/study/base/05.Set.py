# coding:utf-8

# 方式一：
names = set()
names.add("苏轼")
names.add("王安石")

# 方式二：
names = set(["周润发", "周慧敏"])
names.add("周润发")
print(names)  # {'周慧敏', '周润发'}

print("---------------------遍历-------------------------")
# 方式1：
for name in names:
    print(name)

# 方式2：
for name in iter(names):
    print(name)

# 方式3：
for index, name in enumerate(names):
    print(name)

print("---------------------增删改查-------------------------")
names = set()
# 1. 添加
names.add("周润发")  # 方式1：单个添加
names.update({"周慧敏", "周星驰"})  # 方式2：批量添加，参数可迭代即可
names.update(["周总理", "周星驰"])
print(names)  # {'周总理', '周慧敏', '周润发', '周星驰'}

# 2. 删除
names.remove("周慧敏")  # 方式1：如果元素不存在时，会引发KeyError错误
names.discard("周慧敏")  # 方式2：元素不存在时，不会引发任何错误
names.pop()  # 方式3：随机删除并返回一个元素，set为空会引发KeyError
names.clear()  # 方式4：移除set中所有元素
print(names)
