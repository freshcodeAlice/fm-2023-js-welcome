'use strict'




function sumAll(...restArr) {

    let sum = 0;
    for (let i = 0; i < restArr.length; i++) {
        sum += restArr[i]
    }

   return sum
}

/*
 Склейте масив [1, 3, 5, 7] та масив [2, 4, 6, 8], не використовуючи методу concat()

 [1,3,5,7,2,4,6,8];

*/


const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const concatedArray = [...arr1, ...arr2];