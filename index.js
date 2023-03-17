/*
Вивести користувачу "меню" з трьох напоїв і прийняти його вибір
1 - Чай
2 - Кава
3 - Сік

Якщо користувач напише 1 - вивести "Ви обрали чай"
Якщо 2 - "Ви обрали каву"
Якщо 3 - "Ви обрали сік"

Якщо якийсь інший варіант - написати "Я не знаю такого напою"

*/
//debugger;

//let userInput = prompt('Оберіть напій \n 1 - Чай \n2 - Кава \n3 - Сік');

// if(userInput === '1') {
//     console.log("Ви обрали чай");
// } else if (userInput === '2') {
//     console.log("Ви обрали каву");
// } else if(userInput === '3') {
//     console.log("Ви обрали сік");
// } else {
//     console.log('Я не знаю такого напою')
// }
/*
switch(userInput) {
    case '1': {
        console.log("Ви обрали чай");
        break;
    }
    case '2': {
        console.log("Ви обрали каву");
        break;
    }
    case '3': {
        console.log("Ви обрали сік");
        break;
    }
    default: {
        console.log('Я не знаю такого напою');
    }
}
*/

/*
Спитати у користувача, який номер дня тижня його цікавить
Залежно від номера, який введе користувач, вивести назву цього дня
1 - "Понеділок"
2 - Вівторок
....


*/


let weekDay = prompt('What day do you want?');

switch(weekDay) {
    case '1': {
        console.log('Monday');
        break;
    }
    case '2': {
        console.log('Tuesday');
        break;
    }
    case '3': {
        console.log('Wednesday');
        break;
    }
    case '4': {
        console.log('Thursday');
        break;
    }
    case '5': {
        console.log('Friday');
        break;
    }
    case '6': {
        console.log('Saturday');
        break;
    }
    case '7': {
        console.log('Sunday');
        break;
    } 
    default: {
        console.log('There is no such day');
    }
}