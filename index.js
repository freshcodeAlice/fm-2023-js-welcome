let car = {
    brand: 'Audi',
    type: 'sedan',
    volume: 1.6,
    capasity: 5
}


const isColor = 'color' in car;

for (const key in car) {
    console.log(key, car[key]);
}


///// Задача: порівняти вміст двох об'єктів

const o1 = {
    test: 'value',
    color: 'red',
    weight: 5
}


const o2 = {
    test: 'value',
    color: 'red',
    weight: 5
}


function isObjEquals(obj1, obj2) {
    for (const key in obj1) {
       if(obj1[key] !== obj2[key]) {
        return false
       }
    }
    return true;
}

///// Задача: написати функцію, яка перевіряє об'єкт на пустоту
// {} -> true, {test: 'value'} -> false


function isEmpty(obj) {
    debugger;
    for (const key in obj) {
       /* Якщо obj[key] поверне БУДЬ-ЯКЕ існуюче значення - то об'єкт не пустий
       Якщо obj[key] повертає undefined - то в об'єкті такої властивості нема
       */
    //  if(obj[key]) {
        return false;
    //  }
    }
    return true;
}



/// Задачка з *: написати функцію, яка знаходить суму всіх числових значень в об'єкті
/*
const o = {
    key: 1,
    test: 3,
    aaa: 'd',
    hhh: '5',
    kkk: true
}
*/


function getSumOfNumValues(object) {
    let sum = 0;
    for (const key in object) {
       if( typeof object[key] === 'number'){
        sum += object[key];
       }
    }

    return sum;
}