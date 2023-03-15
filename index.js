let age = 18;
// let result = null;

// if (age >= 18) {
//    result = 'Adult';
// } else {
//    result = 'Not adult';
// }


// console.log(result);


/* Тернарний оператор */
// умова ? результат1 : результат2
// результат1 - значення, яке повернеться в результаті операції, якщо умова == true
// результат2 - значення, яке повернеться в результаті операції, якщо умова == false

let result = age >= 18 ? 'Adult' : 'Not adult';
console.log(result);


/*
Створіть змінну з іменем користувача. 
Створіть змінну з вітанням. Якщо ім'я користувача є, тоді в ній має бути "Привіт, користувач!", 
якщо імені немає - "Привіт, Анонім"

*/


let username = 'Vasia';

let welcomeMessage = username ? "Привіт, користувач!" : "Привіт, Анонім";
console.log(welcomeMessage);

let welcomeMessage2 = username ? ("Привіт, " + username) : "Привіт, Анонім";
console.log(welcomeMessage2);
