/*
Написати функцію, яка приймає два числа і повертає середнє арифметичне

Середнє арифметичне = сума всіх чисел, поділена на кількість цих чисел

*/


function average(num1, num2) {
    if (isNaN(num1)) {
        return false
    }
    if (isNaN(num2)) {
        return false
    }
    return (num1 + num2) / 2
}