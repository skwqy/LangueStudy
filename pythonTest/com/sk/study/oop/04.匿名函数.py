# coding:utf-8
"""
匿名函数语法：
    lambda [arg1 [,arg2, ... argN]] : expression
    注意：
        1、匿名函数由 关键字lambda、形参列表、冒号(:)、表达式 四部分组成；形参如果没有可以省略；
        2、冒号(:)是形参和表达式的分隔符
"""


def build(x, y):
    return lambda: x * x + y * y


lambda1 = build(2, 3)
print(type(lambda1))    # <class 'function'>
print(lambda1())    # 13
