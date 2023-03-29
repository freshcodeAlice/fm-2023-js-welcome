'use strict'


const sum = (a, b, c) => a + b + c;


function sumAll() {
    // сума будь-якої кількості аргументів
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i]
    // }
    const argArray = Array.from(arguments);
   const res = Array.from(arguments).reduce((accumulator, current) =>  accumulator + current ,0)
    return res;
//    return sum
}

// Написати стрілочну функцію, яка приймає необмежену кількість аргументів і повертає їхню сумму
const sumAllArrow = (...array) => array.reduce((accumulator, current) =>  accumulator + current ,0);


///// Оператор rest (з англ. залишок) -  збирає розрізнені елементи в масив
// ...arrayName - оператор сприйме купу розрізнених значень і збере їх в масив за назвою arrayName

function restExample(a, b, ...restArray){
    console.log(a);
    console.log(b);
    console.log(restArray);
}