/*
Scope - область видимості. Це ті значення, до яких ми маємо доступ


*/


debugger;


function increment() {
    console.log(++counter); // Використовування глобальних змінних - це Bad Practice (погана ідея), бо цю змінну хтось інший може змінити, а ви навіть не дізнаєтесь про це, і ваш код буде працювати неправильно
}


function changeCounter() {
    counter = 200;
}

let counter = 0;


increment();


changeCounter();

increment();