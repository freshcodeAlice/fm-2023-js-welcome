//// Типи даних

let num = 5; // number
let str = 'hello'; // string
let bool = true; // boolean
let n = null; // null
let und = undefined; // undefined
let bigint = 1n; // BigInt
let symb = Symbol(); // Symbol


/// Object

let obj = {
    key1: 'hello',
    key2: 5,
    test: true,
    insObj: {
        key5: 'value'
    }
}


let fn = function() {

}

fn();

/*
Об'єкт = набір пар "ключ-значення"
Ключ (властивість, поле) - це може бути або рядок, або тип даних Symbol

Властивість - дані про об'єкт
Метод - це функція, яка вбудована в об'єкт і передбачає певні дії з ним
*/

let cat = {
    color: 'red',
    breed: 'Dvorovyi',
    insolenceLevel: 5,
    name: 'Murzik',
    weight: 5,
    sex: 'male',
    sayMeow: function(){
        console.log('MEOOOWWWWWW');
        return true;
    },
    sleep: function() {
        console.log('Im sleeping, zzzz');
    }
}

///  Щоб отримати значення з властивості, використовуємо оператор доступу до властивості за назвою - "."

/// ім'яОб'єкта.ім'яВластивості




/// Зробіть кота, опишіть його властивості, додайте метод sayMeow та sleep



/* CRUD над об'єктом


Create (створити нову властивість): cat.age = 1;
Read (прочитати): cat.age
Update (оновити): присвоїти нове значення: cat.name = 'Barsik'
Delete (видалити): delete cat.sleep
*/