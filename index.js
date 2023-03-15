/* Функції  */

// Функція - це окремий, ізольований фрагмент коду, який має ім'я і за цим ім'ям до нього можна звернутись з різних частин загального коду

// 1 спосіб створення функції - Function Declaration

/*
function ім'яФункції(список аргументів) {
    блок коду функції
}

*/



/*
Напишіть функцію, яка приймає два числа (послідовно два prompt) і виводить в консоль суму цих двох чисел


*/


function getSum(number1, number2) {
    // console.log(number1+number2);
    return number1 + number2;
}


let num1 = Number(prompt('Type first number'));
let num2 = Number(prompt('Type second number'));


let res = getSum(num1, num2);
console.log(res);


/*
Задачка з зірочкою - прийняти від користувача два числа і повернути те, що більше
*/


let n1 = Number(prompt('First number'));
let n2 = Number(prompt('Second number'));

function getBigger(num1, num2) {
    // if (num1 > num2) {
    //     return num1
    // } else {
    //     return num2
    // }

    return (num1 > num2) ? num1 : num2
}