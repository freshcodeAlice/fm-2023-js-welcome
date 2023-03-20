/// Створіть два об'єкти користувачів, що мають ім'я та прізвище.
// Напишіть функцію, яка приймає об'єкт і виводить на консоль вітання типу "ім'яЮзера каже Привіт"


let user1 = {
    name: 'Vasia',
    lastName: 'Petrov'
}

let user2 = {
    name: 'Petya',
    lastName: 'Vasechkin'
}


function sayHello(obj) {
    console.log(obj.name + ' каже Привіт');
}


/// Шаблонні рядки

let name = 'Vasia';

let str = 'hello ' + name;

console.log(str);

let templateString = `hello ${name}`;

console.log(templateString);

let templ2 = `2 + 2 = ${2+2}`;


console.log(templ2)



function sayHello2(obj) {
    console.log(`${obj.name} каже: "Привіт"`);
}


/*
Маємо константи з частинами URL-адреси


*/

const PROTOCOL = 'http://';
const SERVER_IP = 'domain.com';
const PORT = 3000;

function getFullURL(path = '') {
    return `${PROTOCOL}${SERVER_IP}:${PORT}/${path}`;
}  // http://domain.com:3000/path-to-my-file