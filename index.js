function User(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.sayHello = function() {
        return `${this.firstName} say: 'Hello'`
    }
}


const u1 = new User('John', 'Doe', 23, 'doe@ls.as');
const u2 = new User('Jane', 'Crow', 34, 'dsa@ldsa');

/*
Написати функцію-конструктор, яка створює об'єкт Car
У машини будуть наступні властивості:
- brand
- maxSpeed
- speed

Окрім властивостей, у машини мають бути методи:

.accelerate(value) // пришвидшує машину, якщо вона ще не досягла максимальної швидкості
(це speed + value)
.stop() // зупиняє машину (speed = 0)

Обидва методи в результаті роботи мають повертати значення поточної швидкості

Задачка з *:
.deaccelerate(value) - зменшує швидкість на указану кількість
*/


function Car(brand, maxSpeed = 200) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.speed = 0;

    this.accelerate = function(value) {
        this.speed += value;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        return this.speed;
    }

    this.deaccelerate = function(value) {
        this.speed -= value;
        if(this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    this.stop = function() {
        this.speed = 0;
        return this.speed;
    }
}


const bmv = new Car('BMV', 250);