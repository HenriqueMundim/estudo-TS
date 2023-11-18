class Person {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    personInfo(): void {
        console.log(`ID: ${this.id} \nNome: ${this.name} \nAge: ${this.age}`)
    }

}

const personInstance = new Person(1, 'Henrique', 22)

personInstance.personInfo()

