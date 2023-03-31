class MyArray {
    constructor() {
        this.length = 0;

        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    }

    push(value) {
        this[this.length] = value;
        this.length++;
    }

    pop() {
        const lastItem = this[this.length-1];
       delete this[this.length-1];
       this.length--;
       return lastItem;
    }

    forEach(fn){ 
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }

    reduce(fn, initialValue) {
        let accumulator = initialValue;
        for(let i = 0; i < this.length; i++) {
            accumulator = fn(accumulator, this[i], i);
        }
        return accumulator;
    }

    concat(arrToConcat) {
        const newArr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            newArr.push(this[i])
        }
        for (let j = 0; j < arrToConcat.length; j++) {
            newArr.push(arrToConcat[j]);
        }
        return newArr
    }

    /*
    Написати реалізацію методу конкат
    Метод примітива, він відпрацьовує на об'єкті MyArray, приймає другий масив до конкатенації і повертає новий масив, що складається з елементів попереднього і другого (переданого)



    */

    flat() {
        let newArr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] === 'undefined') {
                continue;
            }
            if (this[i] instanceof MyArray) {
                newArr = newArr.concat(this[i].flat());
            } else {
                newArr.push(this[i]);
            }
            
        }
        return newArr;
    }

}


/*
Реалізувати метод flat
flat вирівнює масив, тобто створює новий, в якому елементи примітиви замість вкладеного масива


const arr = [2, 3, 1, [2, 1, [3, 2], 1], 2, [2, 1, 2, 1, 2]]; ---> [2, 3, 1, 2, 1, 3, 2, 1, 2, 2, 1, 2, 1, 2]

Задачка для роздумів - пофіксити наш flat, щоби він вирівнював багатовимірні масиви


*/