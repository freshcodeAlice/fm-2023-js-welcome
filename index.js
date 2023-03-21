const cat1 = {
    name: 'Murk',
    age: 5,
    color: 'red'
}

const cat2 = {
    name: 'Barsik',
    age: 3,
    color: 'grey'
}

const cat3 =  {
    name: 'Kit',
    age: 2,
    color: 'black'
}

// Функція-конструктор - особлива функція, її ім'я пишеться з великої літери і вона створює і повертає новий об'єкт, що створюється за певним шаблоном


function Cat(name, age, weight ,color){
    // new -> створюється {}
    this.name = name;
    this.age = age;
    this.color = color;
    this.sayMeow = function () {
        return 'MEOWWWW'
    }
}


const blackCat = new Cat('Kitty', 3, 'black');

blackCat.age++;

for(let i=0; i< 3; i++) {
    const cat = new Cat('aaa','ccc', 'ssss');
    console.log(cat)
}