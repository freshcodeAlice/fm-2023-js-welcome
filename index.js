/* Цикли  */


/// Цикл - це повторення певного блоку коду задану кількість разів
// Одне повторення (захід виконання) наз. ітерація

/*
while(умова) {
    // блок коду, який буде виконуватись, поки умова = true
    // коли умова = false, ми виходимо з циклу
}
*/

/*
debugger;

let counter = 0;

while(++counter < 3) {
    console.log('loop is going');
}

console.log('loop has ended');
*/

/* 
Префіксна форма інкремента - спочатку +1, потім працюємо зі значенням (порівнюємо його, наприклад, з умовою)
постфіксна форма - спочатку працюємо зі значенням, потім +1


*/


//Задача: вивести на консоль числа від 0 до 10

/*
let counter = 0;

while(counter <= 10) {
    console.log(counter);
    counter++;
}
*/

/*
Вивести на консоль числа в діапазоні від 0 до 10 (включно), які є парними


*/

/*
let counter = 0;
while (counter <= 10) {
    if(counter % 2 === 0) {
        console.log(counter);
    }
    counter++;
}
*/



/*
1. Вивести всі числа, що ділять на 3 і 5

2. Знайти суму всіх чисел від 1 до 20

*/

/*
let number = 0;
while (number <= 15) {
    if((number % 3 === 0) && (number % 5 === 0)) {
        console.log(number);
    }
    number++;
}

*/
debugger;

let sum = 0;
let counter = 0;

while(counter <= 20) {
    sum += counter;
    counter++;
}

console.log(sum);


/// Різновид циклу while
do {
 // блок коду
} while(умова)