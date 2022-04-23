function hello(name) {
    return "hello " + name;
}

class Person {
    constructor(name) {
        this.name = name;
    }

    hi() {
        return "hi " + this.name;
    }
}

// 调用
console.log(hello("skwqy")) // hello skwqy
person = new Person("sk")
console.log(person.hi()) // hi sk
