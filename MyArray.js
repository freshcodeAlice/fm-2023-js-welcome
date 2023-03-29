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
}
