function MyArray() {
    this.length = 0;

    for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }

}


function MyProtoArray() {
    this.push = function(value) {
        this[this.length] = value;
        this.length++;
    }

    this.pop = function() {
        const lastItem = this[this.length-1];
       delete this[this.length-1];
       this.length--;
       return lastItem;
    }

    this.forEach = function(fn){ 
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
}


const protoArray = new MyProtoArray();
MyArray.prototype = protoArray;



/////// Прототипи - практика

/*
Написати функцію-конструктор для юзера.
Юзер має:
- ім'я
- прізвище

- метод, що повертає повне ім'я (ім'я + прізвище): `${this.name} ${this.lastName}`
Метод має бути у прототипі об'єкта.

*/

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


function UserPrototype() {
    this.getFullName = function() {
        return `${this.name} ${this.lastName}`
    }
}

User.prototype = new UserPrototype();


/*
Написати функцію-конструктор для сходів ( Ladder)
Є властивість:
- step

Методи:
 - up() - піднятись на сходинку вище
 - down() - спуститись на сходинку нижче
 - showStep() - подивитись, на якій сходинці ми зараз є


*/


function Ladder(){
    this.step = 0;
}


function LadderPrototype(){
    this.up = function(){
        this.step++;
        return this;
    }
    this.down = function () {
        this.step--;
        return this;
    }
    this.showStep = function() {
        return this.step;
    }
}

Ladder.prototype = new LadderPrototype();

///lddr.up().up().up().down(); - chaining (chain - ланцюжок, цепочка) - об'єднання викликів методів таким чином, що попередній виклик повертає об'єкт або значення, з яким відпрацьовує наступний метод