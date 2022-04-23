# coding:utf-8

# 返回对象：好像返回的是基本类型，其实返回的还是对象，Python中一切皆对象
def get_age():
    return 10


age = get_age()
print(type(age))  # <class 'int'>


def get_names():
    return ["sk", "ssk"]


print(type(get_names()))  # <class 'list'>

print("-------------返回函数-----------------")


def inc(x=0):
    def fun():
        return x + 1

    return fun


fun1 = inc()
print(type(fun1))  # <class 'function'>
i = fun1()
print(type(i))  # <class 'int'>

print("-------------默认返回值-----------------")


def get_name():
    pass


print(get_name())  # None
