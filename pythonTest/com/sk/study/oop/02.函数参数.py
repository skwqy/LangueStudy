# coding:utf-8
# https://www.liaoxuefeng.com/wiki/1016959663602400/1017261630425888
# --------------------------默认参数-------------------------------
# 默认参数: 用来计算x的n次方，由于我们经常计算平方，所以默认第二个参数n的默认值设定为2
def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


print(power(2, 2))  # 4
print(power(2, 3))  # 8


# --------------------------可变参数-------------------------------
# 参数为list
def get_sum(numbers):
    number_sum = 0
    for n in numbers:
        number_sum += n
    return number_sum


print(get_sum([1, 2, 3, 4]))  # 10


# 可变参数版本,和定义一个list或tuple参数相比，仅仅在前面加了一个*号
# 在函数内部，参数numbers接收到的是一个tuple
def get_sum2(*numbers):
    number_sum = 0
    for n in numbers:
        number_sum += n
    return number_sum


print(get_sum2(1, 2, 3, 4))  # 10


# --------------------------关键字参数------------------------------
# 关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数会在函数内部自动组装为一个dict
def person(name, age, **kw):
    print("name:", name, "age:", age, "other:", kw)


person("sk", 20)  # name: sk age: 20 other: {}
person("sk", 20, city="NanJing", job="Engineer")  # name: sk age: 20 other: {'city': 'NanJing', 'job': 'Engineer'}
# 和可变参数类似，也可以先组装出一个dict，然后把dict转换为关键字参数闯进去
extra = {'city': 'NanJing', 'jbo': 'Engineer'}
person('sk', 20, **extra)  # name: sk age: 20 other: {'city': 'NanJing', 'jbo': 'Engineer'}


# **extra表示把extra这个dict的所有key-value用关键字参数传入到函数的**kw参数，kw将获得一个dict
# 注意kw获得的dict是extra的一份拷贝，对kw的改动不会影响到函数外的extra

# --------------------------命名关键字参数---------------------------
# 方式1：如果没有可变参数，必须增加一个*作为特殊分隔符
def person(name, age, *, city, job):
    print(name, age, city, job)


# person('sk', 20) # TypeError: person() missing 2 required keyword-only arguments: 'city' and 'job'
person('sk', 20, city='NanJing', job="Engineer")  # sk 20 NanJing Engineer


# 方式2：如果有可变参数，跟着的命名关键字参数就不再需要一个特殊的分隔符*了
def person(name, age, *args, city, job):
    print(name, age, city, job)


person('sk', 20, 20, 20, city='NanJing', job='Engineer')  # sk 20 NanJing Engineer


# 方式3：命名关键字可以有缺省值
def person(name, age, *, city='NanJing', job):
    print(name, age, city, job)


person('sk', 20, job='Engineer')  # sk 20 NanJing Engineer


# --------------------------参数组合---------------------------
# 在Python中定义函数，可以用必选参数、默认参数、可变参数、关键字参数、命名关键字参数，这5中参数都可以组合使用。
# 但是必须注意参数定义的顺序必须是：必选参数、默认参数、可变桉树、命名关键字参数、关键字参数；

# 必选参数、默认参数、可变参数、关键字参数
def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)


# 必须参数、默认参数、命名关键字参数、关键字参数
def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)


f1(1, 2)  # a = 1 b = 2 c = 0 args = () kw = {}
f1(1, 2, c=3)  # a = 1 b = 2 c = 3 args = () kw = {}
f1(1, 2, 3, 'a', 'b')  # a = 1 b = 2 c = 3 args = ('a', 'b') kw = {}
f1(1, 2, 3, 'a', 'b', x=99)  # a = 1 b = 2 c = 3 args = ('a', 'b') kw = {'x': 99}
f2(1, 2, d=99, ext=None)  # a = 1 b = 2 c = 0 d = 99 kw = {'ext': None}

# 最神奇的是通过一个tuple和dict，你也可以调用上述函数
print("------------------------------------")
args = (1, 2, 3, 4)
kw = {'d': 99, 'x': '#'}
f1(*args, **kw)  # a = 1 b = 2 c = 3 args = (4,) kw = {'d': 99, 'x': '#'}
args = (1, 2, 3)
kw = {'d': 88, 'x': '#'}
f2(*args, **kw)  # a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}
