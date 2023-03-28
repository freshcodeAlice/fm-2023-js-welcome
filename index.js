class Animal {
    constructor(name, amountOfLegs, type) {
        //// this -> {}
        this.name = name;
        this.amountOfLegs = amountOfLegs;
        this.type = type;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string')
        }
        this._name = value;
    }

    get name() {
        return this._name;
    }

    saySomething() {
        return `${this._name} making noize`
    }

    eat() {
        return `${this._name} is eating`
    }

    static isAnimal(obj) {
       return obj instanceof Animal;
    }
 }


 class Dog extends Animal {
    constructor(name, amountOfLegs, type, color) {
        super(name, amountOfLegs, type);
        this.color = color;

    }

    run() {
        return `${this._name} is running`
    }
 }



 /*
Створити класи Адміна, Модератора і Користувача 
(Admin, Moderator, User)

Адмін:
- має ім'я, прізвище, position

Модератор
- має ім'я, прізвище, position
метод, який приймає користувача і "банить" його
getBan(user)

Користувач
- має ім'я, прізвище, isBanned



 */


class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.isBanned = false;
    }
}

class Moderator extends User {
    constructor(name, lastName) {
        super(name, lastName);
        this.isBanned = undefined;
        this.position = 'Moderator';
//        delete this.isBanned;
    }

    getBan(user) {
        user.isBanned = true;
    }

    toggleBan(user) {
        user.isBanned = !user.isBanned;
    }

}

class Admin extends Moderator{
    constructor(name, lastName) {
        super(name, lastName);
        this.position = 'Admin';
    }
}