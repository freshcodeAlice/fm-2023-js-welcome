/*
Scope - область видимості. Це ті значення, до яких ми маємо доступ


*/


debugger;

let counter = 1;


function goodFunction(counter) {
    console.log(counter); // Функція має свій counter у локальній області видимості і не буде лізти до глобальної
    /// Все, з чим працює функція, має приходити цій функції як аргументи
    
}

goodFunction(10);