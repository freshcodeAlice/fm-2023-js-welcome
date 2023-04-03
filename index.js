//// Методи примітивів


/*
Коли ми працюємо з примітивами по значенню - це просто примітив, це не об'єкт.

Коли ми викликаємо будь-який метод або властивість примітива, JS створює об'єкт-обгортку відповідного типу, викликає метод який ми зазначили, метод відпрацьовує, після чого об'єкт-обгортка знищується.
*/


/// Написати функцію, яка приймає рядок довільної довжини і повертає рядок, в якому всі слова написані з великої літери


const getUpperWords = (string) => string.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join(' ');



/*
ДЗ на вихідні:


1. Написати функцію, яка перевіряє рядок на спам. Заборонені слова містяться в масиві в середині функції, на кшталт: 
const spamWords = ['viagra', 'XXX', 'porn'];
Результат виклику функції - true, якщо рядок містить будь-що з забороненого і false, якщо не містить

2. Створіть функцію truncate(), яка приймає рядок і кількість символів і "обрізає" рядок до вказаної довжини. Повертає новий обрізаний рядок, в кінці якого додаються "...", якщо рядок був обрізаний. Якщо рядок початково менший, ніж задана кількість символів, нічого не обрізається і три крапки не додаються.

3. Написати функцію palindrom(), яка перевіряє чи є рядок паліндромом (тобто словом, яке читається з будь-якого боку однаково).
palindrom('anna') -> true,
palindrom('mama') -> false
Регістр не враховувати ('Anna' або 'aNNA' - має спрацювати за будь-якого регістру)

4. Написати функцію, яка повертає кількість голосних символів в переданому рядку.
(Голосні це "a", "e", "o", "u"," i").


*/


function isSpam(stringToCheck) {
    const spamWords = ['viagra', 'XXX', 'porn'];
    const newStr = stringToCheck.toLowerCase();
    for (let i = 0; i < spamWords.length; i++) {
        if(newStr.includes(spamWords[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}




/// buyViAGraNOW


////2

function truncate(str, length) {
    if(str.length < length) {
        return str;
    }
    // const newstr = str.slice(0, length);
    // newstr += "...";
    // return newstr;

    return str.slice(0, length).concat('...');
}


////3

function palindrom(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}




/////4 

/*
Написати функцію, яка повертає кількість голосних символів в переданому рядку.
(Голосні це "a", "e", "o", "u"," i").
*/


function countVowels(string) {
    const vowels = ['a', 'e', 'o', 'u', 'i'];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(string[i] === vowels[j]) {
                count++
            }
        }
    }
    return count;
}


function countVowels2(string) {
    // const vowels = ['a', 'e', 'o', 'u', 'i'];
    // const arr = string.split('');
    // const resultArray = arr.filter((letter) => {
    //     return vowels.includes(letter);
    // });
    // return resultArray.length;

    return string.split('').filter(letter => ['a', 'e', 'o', 'u', 'i'].includes(letter)).length;
}