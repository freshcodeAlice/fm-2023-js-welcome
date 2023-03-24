function MyArray() {
    this.length = 0;

    for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }

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

    this.forEach = function(fn){ // метод приймає іншу функцію і викликає її на кожному елементі об'єкту
        // 1. Пройти циклом по поточному об'єкту
        for (let i = 0; i < this.length; i++) {
         // 2. Викликати цю функцію на кожному елементі 
            fn(this[i]);
        }
    }
}

const newarr = new MyArray();

// newarr.forEach(function(elem){
//     console.log(elem);
// })


/*
Реалізувати метод pop():
this.value--;


Задачка з *: 
1. реалізувати метод forEach
2. Реалізувати метод filter


3. Реалізувати метод reverse

*/





///////////


// Функції

function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}


sum(32, 2);
sum(3, 1, 8);
sum(3, 1, 2, 3, 4, 2);


//  Написати функцію, яка приймає довільну кількість елементів і знаходить серед них найбільший

function getMax(){
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}