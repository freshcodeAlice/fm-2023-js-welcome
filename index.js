/* Методи Масивів  */

const arr = [1, 2, 3, 4];
// arr.push() - додає 1 або більше елементів в кінець масива
arr.push(10);


//----

// arr.unshift() - додає на початок массива, всі елементи здвигаються на відповідну кількість доданих елементів

arr.unshift(-1);

// -----


//arr.shift() - видає перший елемент, всі інші здвигаються на один вперед
arr.shift()


//---
arr.pop(); // - видаляє останній елмент з кінця масива


// ----

// Concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.concat(arr2)
//(6) [1, 2, 3, 4, 5, 6]
arr1
//(3) [1, 2, 3]
arr2
//(3) [4, 5, 6]
const newarr = arr1.concat(arr2)
newarr
//(6) [1, 2, 3, 4, 5, 6]0: 11: 22: 33: 44: 55: 6length: 6[[Prototype]]: Array(0)
const new2arr = arr1.concat(7, 8, 9, 10, 11)
new2arr
//(8) [1, 2, 3, 7, 8, 9, 10, 11]


/// fill() - заповнює масив переданим значенням

/// .includes() - повертає true, якщо передане значення є в масиві, false - якщо немає
const array2 = [2, 3, 4, 5, 6];
array2.includes(4)
//true
array2.includes(20)
//false

//----

array2.join()
//'2,3,4,5,6'
array2.join('');
//'23456'
array2.join(' ');
//'2 3 4 5 6'
array2.join('*');
//'2*3*4*5*6'


///----


array2
//(5) [2, 3, 4, 5, 6]
array2.reverse()
//(5) [6, 5, 4, 3, 2]
array2
//(5) [6, 5, 4, 3, 2]
array2
//(5) [6, 5, 4, 3, 2]



function getReverseArray (array) {
    const arr2 = new Array();

    for (let i = array.length - 1; i >= 0; i--) {
        arr2.push(array[i]);
    }

    return arr2;
}



//// ---

//slice - копіює частину початкового масива, повертає новий масив

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
array
//(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.slice(3, 6)
//(3) [4, 5, 6]
array.slice()
//(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]


//// splice - мутує (змінює) початковий масив, додаючи або видаляючи елементи масива


array
//(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.splice(3, 0, 10)
//[]length: 0
array
//(10) [1, 2, 3, 10, 4, 5, 6, 7, 8, 9](0)
array.splice(3, 1);
//[10]
array
//(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
array.splice(4, 0, 10);
//[]
array
//(10) [1, 2, 3, 4, 10, 5, 6, 7, 8, 9]