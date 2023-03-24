
/*
Домашнє завдання:
1. Написати функцію-конструктор Worker(робітник). У робітника є
- ім'я (firstName)
- прізвище (lastName)
- ставка за день (rate)
- кількість відпрацьованих днів в поточному місяці (days)
А також метод getSalary, який розраховує зарплатню.
Звернути увагу: ставка не може бути від'ємною, кількість відпрацьованих днів теж.


2. Написати функцію-конструктор для країни Country
Країна матиме властивості:
- назва
- площа
- кількість населення
Метод, що розраховує щільність населення (кількість населення / площу країни)
*/


function Worker(firstName, lastName, rate, days) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (rate < 0) {
        this.rate = 0;
    } else {
        this.rate = rate;
    }
    if(days < 0) {
        this.days = 0;
    } else {
        this.days = days;
    }

    this.getSalary = function(){
        return this.days * this.rate;
    }
}



///2


function Country(name, area, popularity) {
    this.name = name;
    this.area = area;
    this.popularity = popularity;


    this.getDensity = function (){
        return this.popularity/this.area;
    } 
}