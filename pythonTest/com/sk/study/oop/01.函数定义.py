# coding:utf-8

# 函数定义
def hello(name):
    return "hello " + name


class Person:
    # 构造函数
    def __init__(self, name):
        self.name = name

    # 成员方法
    def hi(self):
        return "hi " + self.name


if __name__ == '__main__':
    print(hello("skwqy"))  # hello skwqy
    person = Person("sk")
    print(person.hi())  # hi sk
