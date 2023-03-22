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



//////

// array2.filter(function (element) {
//     // if (element % 2 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }

//     // return (element % 2) ? false : true; 

//     return element % 2 === 0
// })

const filtered = array2.filter((elem) => !(elem % 2));



///// Sort


const newArray = [2, 6, 3, 7, 1];

newArray.sort((a, b) => b - a);


users.sort(function (prev, next) {
    if (prev.firstName > next.firstName) {
        return 1;
    } else {
        return -1;
    }
});