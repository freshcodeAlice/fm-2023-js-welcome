class Worker {
    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days
    }
}


/*
Задачка Car

Машина має:
- бренд
- максимальна швидкість
- поточна швидкість


Методи:
- зупинка - stop (поточна швидкість = 0)
- прискорення - accelerate (приймає значення і збільшує швидкість на вказане значення, якщо не досягнуто максимальної швидкості)
- сповільнення - deaccelerate (приймає значення і зменшує швидкість на вказане значення, якщо це не призведе до від'ємної швидкості, інакше зупинка)


*/


class Car {
    constructor(brand, maxSpeed = 200) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }


    accelerate(value) {
        this.speed += value;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        return this.speed;
    }

    deaccelerate(value) {
        this.speed -= value;
        if(this.speed < 0) {
            this.speed = 0;
        }
        return this.speed;
    }

    stop() {
        this.speed = 0;
        return this.speed;
    }
}


const bmv = new Car('BMV', 250);
