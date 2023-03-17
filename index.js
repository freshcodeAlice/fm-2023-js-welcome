/*
Задача: зробити калькулятор.
Функція calculator запитує у користувача послідовно двома промптами два числа.
Третім промптом запитує дію:
+ - щоб скласти
- - щоб відняти
* - щоб перемножити
/ - щоб поділити

Результат вивести в alert


*/

function calculator() {
    let num1 = Number(prompt('Type first number'));
    let num2 = Number(prompt('Type second number'));
    let action = prompt('Choose your action: +, -, *, /');
    let result;
    /// Покращення коду: перевірити числа на NaN

    switch(action) {
        case '+': {
            result = sum(num1, num2);
            break;
        }
        case '-': {
            result = sub(num1, num2);
            break;
        }
        case '*': {
            result = multiply(num1, num2);
            break;
        }
        case '/': {
            result = divide(num1, num2);
            break;
        }
        default: {
            return false;
        }
    }

    return result;
}


function sum(a, b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}