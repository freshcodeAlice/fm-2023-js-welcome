const userPlan = {
    mon: 'dantist',
    tue: 'go to park',
    wed: 'hard work',
    thu: 'go party',
    fri: 'read a book',
    sat: 'stay in bed'
}


//// Спитати у юзера, який день тижня його цікавить
/// Вивести alert-ом значення з об'єкта, що відповідає введеному дню.

// Наприклад: юзер вводить 'Wed' -> 'hard work'

const userInput = prompt('What day do you want?');
alert(`${userPlan[userInput] ? userPlan[userInput] : 'Nothing planned'}`);

