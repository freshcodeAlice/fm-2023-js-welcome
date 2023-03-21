/// Об'єкт
// Ключ в об'єкті - рядок або Symbol()

const user = {
    firstName: 'John',
    lastName: 'Doe',
    'favourite color': 'red',
    2: 'value'
}

//console.log(user.'favourite color');  - не буде працювати

// Оператор доступу до обчислюваної властивості - конотацією масива
// []

user['favourite color']
user['2']
user[2]



let property = 'firstName';

user[property] // 'John'