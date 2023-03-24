function MyArray() {
    this.length = 0;

    this.push = function(value) {
        this[this.length] = value;
        this.length++;
    }

    this.pop = function() {
        // delete з об'єкта останній елемент
        // зменшити довжину масива
        const lastItem = this[this.length-1];
       delete this[this.length-1];
       this.length--;
       return lastItem;
    }
}


/*
Реалізувати метод pop():
this.value--;


Задачка з *: 
1. реалізувати метод forEach
2. Реалізувати метод filter

*/