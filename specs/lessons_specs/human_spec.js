class Human {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log('Hello, World! My name is ', this.name);
    }
}

let a = new Human('Alex');
let b = new Human('Helen');
let c = new Human('Marry');

a.sayHello();
b.sayHello();
c.sayHello();