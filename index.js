// Symbol

/*
const symb = new Symbol();
//Uncaught TypeError: Symbol is not a constructor
const symb = Symbol();
//undefined
symb;
//Symbol()
const symb2 = Symbol('label for human');
//undefined
symb2
//Symbol(label for human)
const symb3 = Symbol();
//undefined
symb === symb3;
//false


*/


const symb = Symbol();

const obj = {
    userName: 'John',
    [symb]: 'Hello'
}


console.log(obj[symb]);