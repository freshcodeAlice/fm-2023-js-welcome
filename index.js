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