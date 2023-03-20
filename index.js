// Копіювання і робота з об'єктом



/// Робота з примітивними типами відбувається за значенням

let a = 1;
//undefined
let b = a;
//undefined
a;
//1
b;
//1
a === b;
//true
1 === 1;
//true

a = 5;
a // 5
b // 1

/// Робота з об'єктами відбувається за посиланням у пам'яті

let obj1 = {
    test: 'value'
}

let obj2 = obj1;
    
obj1.test = 'hello'
//    'hello'
 obj1
//    {test: 'hello'}test: "hello"[[Prototype]]: Object
obj2.test = 'new value'
//    'new value'
obj1
//    {test: 'new value'}test: "new value"[[Prototype]]: Object
obj2 === obj1
//    true

/// Не дорівнюють, бо це два різні пусті об'єкти
let o1 = {};
//undefined
let o2 = {};
//undefined
o1 === o2
//false




/////


function sayHello(obj) {
    obj.age = 15;
}

let user = {
    name: 'John',
    hello: function() {
        console.log('John say hello');
    }
}

sayHello(user)




function sumTwoNumbers(a, b) {
   return a + b;
}

function consoleResult(arg1, arg2, func) {
    let result = func(arg1, arg2);
    console.log(result);
}


consoleResult(4, 5, sumTwoNumbers)