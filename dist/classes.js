"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    personInfo() {
        console.log(`ID: ${this.id} \n Nome: ${this.name} \n Age: ${this.age}`);
    }
}
const personInstance = new Person(1, 'Henrique', 22);
personInstance.personInfo();
