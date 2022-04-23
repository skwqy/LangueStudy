class Person {
    // 构造函数
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 成员方法，定义时不需要关键字function
    eat() {
        console.log("Person(", this.name, ") .....eat......")
    }

    study() {
        console.log("Person(", this.name, ") .....study......")
    }
}

class Student extends Person {
    eat() {
        console.log("Student(", this.name, ") .....eat......")
    }

    study() {
        console.log("Student(", this.name, ") .....study......")
    }
}

let person = new Person("sk", 30)
person.eat()    // Person( sk ) .....eat......
person.study()  // Person( sk ) .....study......

let student = new Student("skwqy", 29)
student.eat()   // Student( skwqy ) .....eat......
student.study() // Student( skwqy ) .....study......