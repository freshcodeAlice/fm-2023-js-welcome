/// Map

const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]);

/*
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
*/


/*
Задача на анаграми: написати функцію, яка приймає два рядки і визначає, чи можемо ми відтворити другий рядок за допомогою літер першого рядка


Декомпозиція задачі:
1. Обидва слова треба привести до одного регістру
2. Порахувати, скільки разів зустрічається та чи інша літера.

Слова є анаграмами, якщо в них однакова кількість однакових літер

*/
/**
 * 
 * @param {String} str1 - перше слово
 * @param {String} str2 - друге слово
 * @returns {Boolean} - true, якщо слова є анаграмами, false якщо не є
 */

function compare(str1, str2) {
    const map1 = createVocabulary(str1.toLowerCase());
    const map2 = createVocabulary(str2.toLowerCase());
  
    if(map1.size !== map2.size) {
        return false
    }

    for (const key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)){
            return false
        }
    }
    return true
}


function createVocabulary(str) {
    const map = new Map();
    for (let i=0; i < str.length; i++) {
        if(map.has(str[i])) { /// літера мені вже раніше зустрічалась
           let letterCount = map.get(str[i]);
           map.set(str[i], letterCount+1);
        } else { /// літера мені не зустрічалась ще жодного разу
            map.set(str[i], 1);
        }
       
    }
    return map;
}


// mama -> amma
// mama -> mamamam