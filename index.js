/*
Написати функцію, яка вирішує квадратні рівняння

Квадратне рівняння - рівняння вигляду

a*x**2 + b*x + c = 0

Вирішується дискримінантом
D = b2 − 4ac

Якщо D > 0, то коренів 2,
    x1 = (-b + ^D) / 2*a
    x2 = (-b - ^D) / 2*a
Якщо D = 0, то корінь 1
Якщо D < 0, то коренів немає

*/


function quadraticEquation(a, b, c) {
    let D = b*b - 4 * a * c; 
    let x1 = null;
    let x2 = null;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(x1);
        console.log(x2);
    }
    if (D === 0) {
        x1 = -b / 2*a;
        console.log(x1);
    }
    if (D < 0) {
        console.log('Equation has no roots')
    }
}