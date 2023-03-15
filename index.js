

/*

Напишіть функцію, яка визначає чи парним є передане їй число
Повертає true, якщо число парне (четное)
false, якщо непарне
*/
 

function isEven(num) {
    let rest = num % 2;

    // if (rest === 1) {
    //     return false
    // } else {
    //     return true
    // }

   // return (num % 2 === 0) ? true : false;
   
   return !Boolean(num % 2)

}


