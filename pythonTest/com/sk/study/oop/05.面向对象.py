# coding:utf-8

class Person:
    # 构造方法
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print("Person(", self.name, ")....eat.....")

    def study(self):
        print("Person.....study.......")


class Student(Person):

    def eat(self):
        print("Student(", self.name, ")....eat.....")

    def study(self):
        print("Student.....study.......")


person = Person("sk", 30)
person.eat()  # Person( sk )....eat.....
person.study()  # Person.....study.......

student = Student("skwqy", 30)
student.eat()  # Student( skwqy )....eat.....
student.study()  # Student.....study.......
