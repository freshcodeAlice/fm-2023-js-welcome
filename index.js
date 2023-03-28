class Figure {
    constructor(type) {
        this.type = type;
    }

    getArea() {

    }
}

class Triangle extends Figure{
    constructor(a, h) {
        super('triangle');
        this.a = a;
        this.h = h;
    }

    set a (value) {
        this._a = value;
    }

    get a() {
        return this._a;
    }

    set h(value) {
        this._h = value;
    }

    get h() {
        return this._h;
    }

// Перевизначення (перезапис) батьківського методу - override
    getArea() {
        return (this.a * this.h) / 2;
    }
}

/*
Написати клас Квадрат (Square)
додати метод обчислення площі квадрату

*/


class Square extends Figure {
    constructor(a) {
        super('square');
        this.a = a;
    }

    getArea() {
        return this.a * this.a;
    }
}


/////////

/**
 * 
 * @param {Figure} figure 
 * @returns 
 */

function getFigureArea(figure) {
    if (figure instanceof Figure) {
        return figure.getArea()
    }

}


/*
Поліморфізм - здатність функції працювати з об'єктами різних типів, якщо вони пов'язані наслідуванням
Так само, як вона працює з екземпляром Figure, вона може працювати з будь-яким наслідником цього класу

*/


/*
Напишіть класс Circle, який реалізовує обчислення площі круга

*/

class Circle extends Figure {
    constructor(r) {
        super('circle');
        this.r = r;
    }

    getArea() {
        return Math.PI * this.r * this.r;
    }
}