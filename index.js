class Person {
    static serialNumber = 34;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

    greet() {
        console.log(`Hello how do you do?`);
    }

    static help() {
        console.log(`I am person class, how can I help you?`);
    }
}

const person1 = new Person("John", 20);
const person2 = new Person("Jane", 21);
const person3 = new Person("Jim", 22);

person1.greet();
person2.introduce();
person3.introduce();