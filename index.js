class Worker {
    constructor(name, rate, days) {
        this.name = name;
       this.rate = rate; // Це насправді використання сеттера!!
       this.days = days; // Це насправді використання сеттера!
    }

    set rate(value){
        if (typeof value !== 'number') {
            throw new TypeError('Rate must be a number');
        }
        if (value < 0) {
            throw new RangeError('Rate must be more than zero')
        } 
        this._rate = value;
    }

    get rate(){
        return this._rate;
    }



    set days(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Days must be a number');
        }
        if (days < 0) {
            throw new RangeError('Days must be more than zero')
        } 
        this._days = value;
    }

    get days() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days
    }
}


// Сеттери і геттери
// Сеттер - функція для зміни (встановлення) значення (set - встановлювати)
// Геттер - функція для отримання значення (get - отримувати)