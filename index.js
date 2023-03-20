/* Цикли  */

/*
Домашнє завдання

1. Реализувати гру FizzBuzz
https://ru.wikipedia.org/wiki/Fizz_buzz
Вивести числа від 1 до 100
Якщо число ділиться на 3, то замість числа вивести "Fizz"
Якщо число ділиться на 5, то замість числа вивести "Buzz"
число ділиться і на 3, і на 5, то замість числа вивести "FizzBuzz"

2. Написати функцію, яка грає з користувачем в "угадайку".
Ви загадуєте якесь число і змушуєте користувача його відгадати - вводити його варіанти в prompt.
Якщо його число більше, ніж те що ви загадали, то вивести alert("забагато"), навпаки - вивести "замало".
Повторювати дію, поки користувач не введе правильне число.

*/


/// FizzBuzz

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++){
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

function fizzBuzz2(num) {
    for(let i = 1; i <= num; i++){
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue
        } 
        if (i % 3 === 0) {
            console.log('Fizz');
        } 
        if (i % 5 === 0) {
            console.log('Buzz');
        } 
        console.log(i);
    }
}


///2

function guessNum() {
    let num = 5;
    while(true) {
            let userGuess = Number(prompt('Guess number'));
            if ( userGuess === num) {
                alert('You successfully guess!');
                break;
            } else if (userGuess > num) {
                alert('Too much');
            } else if (userGuess < num) {
                alert('Not enough')
            } else {
                console.log('Error');
            }
    }
}



/*
Нова задача:

Написати функцію, яка зводить число у заданий ступінь. Зробити це не оператором зводу у ступінь (**), а саме циклом

2^2 = 2*2
2^3 = 2*2*2
*/




function pow(base, powNumber) {
    let result = 1;
    for(let i = 1; i <= powNumber; i++) {
        result *= base;
    }
    return result;
}