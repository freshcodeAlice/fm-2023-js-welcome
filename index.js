/* Методи Масивів  */

/// forEach - (для кожного) - викликає передану функцію для кожного елемента масива

const users = [ 
    {
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        firstName: 'Alex',
        lastName: 'Crow'
    }
];

users.forEach(function (userObj) {
    userObj.age = 21;
});


//// map() - викликає передану функцію для кожного елемента масива і результат цієї функції буде наступним елементом нового масива


const array2 = [1, 2, 3, 4, 5];


const changeArr = array2.map((num) => num+2);