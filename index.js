const nums = [1, 2, 1, 4, 7, 3, 1, 9, 3, 2, 4, 6, 4, 3, 1];

// приклад алгоритму лінійної складності:
// скільки вхідних даних - стільки і операцій
// O(n)
const linearSearch = (elem, arr) => {  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

// приклад алгоритму квадратичної складності
// вхідні дані в квадраті = стільки операцій і буде виконано
// O(n^2)
const multyTable = (limit) => {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push(`${i}*${j}=${i*j}`);
    }
  }
  return table;
}


//// Бінарний пошук
/// Працює тільки на відсортованих даних

/// логаріфмічна залежність
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const binarySearch = (array, whatToFind) => {
   debugger;
  let start = 0;
  let end = array.length-1;
  let middle = Math.round((start + end) / 2);
  while(true) {
    if (array[middle] === whatToFind){
      return middle;
    } 
    if (array[middle] > whatToFind) {
      end = middle;
      middle = Math.floor((start+end) / 2);
    }
    if (array[middle] < whatToFind) {
      start = middle;
      middle = Math.ceil((start+end) / 2);
    }
  }
}



//// Бінарний пошук - рекурсія

const recursiveBinarySearch = (array, whatToFind) => {
  const middle = Math.ceil((array.length - 1) / 2);
  debugger;
  if (array[middle] === whatToFind) {
    return middle;
  } else if (array[middle] > whatToFind) {
    return recursiveBinarySearch(array.slice(0, middle), whatToFind);
  } else if (array[middle] < whatToFind) {
    return recursiveBinarySearch(array.slice(middle, array.length), whatToFind);
  } else {
    return -1;
  }
}


/*
Таска на "угадайку" - користувач загадує подумки число, ваша задача - написати функцію, яка його відгадує
Число від 0 до 100

Для підтвердження або спростування використовувати confirm


*/


function guessNumber() {
  alert('Figure number from 0 to 100');
  let start = 0;
  let end = 100;
  let middle = Math.round((start + end) / 2);
  while(true) {
    if(confirm(`Your number is ${middle}?`)) {
      return middle;
    }
    if(confirm(`${middle} > than your number?`)) {
      end = middle;
      middle = Math.floor((start + end)/2);
    } else {
      start = middle;
      middle = Math.ceil((start + end)/2);
    }
  }
}