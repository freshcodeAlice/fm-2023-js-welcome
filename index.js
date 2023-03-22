/* Масиви  */

const arr = [1, 4, 8, 9];


for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


/*
Знайти суму елементів числового масива

*/


let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);



/* Знайти найбільший числовий елемент у масиві */
// [2, 3, 1, 6, 4] - 6


function getMaxElement(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

function getMinElement(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}
console.log(getMinElement(arr));


/// Написати функцію, що знаходить середнє арифметичне всіх елементів масиву


function getAverage(arr) {

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

return sum /  arr.length;
}


// Задачка з *: знайти суму всіх парних елементів масива
// (за парними індексами)
// [1, 2, 3, 4, 5, 6, 7]

function getSumOfEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i = i + 2) {
        sum += array[i];
    }
    return sum;
}


const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(getSumOfEven(arr2));