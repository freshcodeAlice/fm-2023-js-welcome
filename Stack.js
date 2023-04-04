class Stack {
    constructor(maxSize, ...array) {
        this._maxSize = maxSize;
        this._size = 0;
        array.forEach(el => {
            this.push(el)
        })
    }

    get size() {
        return this._size
    }

    get isEmpty() {
        return this._size === 0;
    }


    push(value){

        if (this.size >= this._maxSize) {
            throw new RangeError('Stack overflow');
        }

        this[`_${this.size}`] = value;
        this._size++;
        return this._size;
    }

    pop() {
        /*
        1. Витягти останній елемент стеку.
        Відкласти значення в тимчасову змінну
        2. Видаляемо останній елемент стеку
        3. Зменьшуємо розмір стеку на 1.
        4. В результаті функції повертаємо значення, яке ми відклали в змінну
        */
        if (this.isEmpty) {
            return null;
        }

        const lastItem = this[`_${this.size - 1}`];
        delete this[`_${this.size - 1}`];
        this._size--;
        return lastItem;
    }

    pick() {
        /*
        Метод повертає значення останнього елемента стеку, не видаляючи його
        */

        return this[`_${this.size - 1}`];
    }
}