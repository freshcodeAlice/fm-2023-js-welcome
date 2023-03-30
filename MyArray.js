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

    flat() {
//        debugger;
        const newArr = [];
        for (let i = 0; i < this.length; i++) {
            let item;
            if (this[i] instanceof MyArray) { ////Array.isArray();
                ///// робимо щось, якщо перед нами елмент-масив
                // for (let j = 0 ; j < this[i].length; j++ ) {
                //     newArr.push(this[i][j]);
                // }
                // item = this[i].flat(); <---- Проблема отут!
            } else {
                item = this[i];
            }
            newArr.push(item);
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