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