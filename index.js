/// Map

const obj = {
    key: 'value',
    a: '1',
    m: 222,
    age: 111
}

/*
В об'єкті може бути ключем рядок або т.д. Symbol

В Map ключем може бути будь-який тип даних.
1. Ключ має бути унікальним. 

*/

const map = new Map();


const fn = () => {}

map.set(1, 'hello'); // встановити значення по ключу
map.set({test: 'value'}, 'object');
map.set(fn, 'test');

map.get(fn) // отримати з мапи значення по ключу

console.log(map.has('1'));



/// Задача: написати функцію-перекладач


function translater(stringToTranslate) {
    const vocabulary = new Map();
    vocabulary.set('cat', 'кіт');
    vocabulary.set('eat', 'їсти');
    vocabulary.set('dog', 'собака');

     const words = stringToTranslate.toLowerCase().split(' ');
   const translatedArray = words.map((word) => vocabulary.has(word) ? vocabulary.get(word) : word);

  return translatedArray.join(' ');
}