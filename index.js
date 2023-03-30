///  Рекурсія

// Рекурсія - це коли функція викликає сама себе.

/// Написати функцію, яка знаходить факторіал від заданого числа

// 5! = 1*2*3*4*5
// 5! = 4! * 5 = 3! * 4 * 5 = 2! * 3 * 4 * 5 = 1! * 2 * 3 * 4 * 5
/// 1! = 1 - база рекурсії


function factorial(num) {

    if (num === 1) {
        return 1
    }
    const res = num * factorial (num - 1);
    return res;
}


/// Написати функцію, яка обчислює і виводить на консоль ряд Фібоначчі до певного елемента

// Ряд Фібоначчі - числова послідовність, в якій кожен наступний елемент послідовності = сумі двох попередніх
// F1 = 1
// F2 = 1

// F3 = 2
// F4 = 3
// F5 = 5

// f(n) = f(n-1) + f(n-2);


function fibonachi(n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 1
    }

    return fibonachi(n-1) + fibonachi(n-2);
}


function getFibonachiNumbers(dimension) {
    for (let i = 1; i <= dimension; i++) {
        console.log(`${i} --- ${fibonachi(i)}`);
    }
}