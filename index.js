//// Date


/// Написати функцію, яка видає час у форматі:
/// година*хвилина


function getFormatDate() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}`);
}


console.log(new Date().getHours());




/*
Написати функцію, яка виводить поточну дату у форматі:
Mon, 3 April --- 10:09


*/


function getFormatTime() {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    console.log(`${weekDays[date.getDay() - 1]}, ${date.getDate()} ${monthNames[date.getMonth()]} --- ${date.getHours()}:${date.getMinutes()}`);
}


/*
Створити клас Student, при створенні екземпляра очікуємо на
- ім'я 
- прізвище
- рік вступу

Реалізувати методи:
- getFullName(), який повертає повне ім'я
- getCourse(), який повертає на якому курсі вчиться студент. Якщо > 5, то повернути "випустився".
Рік обчислюємо відносно поточного року.



*/



class Student {
    constructor(firstName, lastName, enterYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.enterYear = enterYear;
    }


    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getCourse() {
        // const year = new Date().getFullYear();
        // const course = year - this.enterYear;
        // if(course > 5) {
        //     return 'graduated'
        // } else {
        //     return course
        // }
        const course = new Date().getFullYear() - this.enterYear;
        return course > 5 ? "graduated" : course;
    }
}


/*
Отримати від користувача за допомогою prompt його дату народження
'рік-місяць-день' і повернути кількість днів, що лишилась до дня народження


*/

function getMyBirthday() {
    const userBirthday = prompt('Type your birthday');
    const userBDate = new Date(userBirthday);
    const bDateThisYear = new Date(new Date().getFullYear(), userBDate.getMonth(), userBDate.getDate());
    const MsinDay = 1000 * 60 * 60 * 24;
    return Math.floor((bDateThisYear.getTime() - Date.now()) / MsinDay);
}