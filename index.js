///Замикання

// Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.

function makeCounter() {
    let counter = 0;
    const newObj = {
        increment() {
            return ++counter
        },
        decrement() {
            return --counter
        }
    }

    return newObj;
}

 const count = makeCounter();


 /*
Створіть функцію createAdder(n), яка приймає число і повертає іншу функцію, що буде отримувати в параметри інше число, яке буде додавати до аргумента createAdder


createAdder(5) -> function(a)
function(10) -> 5+10
function (20) -> 5+10+20


 */

/*
function createAdder(n) {
    return function(m) {
        return n=n+m
    }
}
*/


const createAdder = (n) => (m) => (n=n+m);

// const innerFun = createAdder(5);
