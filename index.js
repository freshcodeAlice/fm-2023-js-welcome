// 1 - Function Declaration - Задекларована функція

/*
funName() // таку функцію можна викликати раніше, ніж в коді вона описана


function funName(arg) {
    //// code
    return ;
}


*/


// 2 - Function Expression - Функціональний вираз

let func = function(arg) {
    ////
}

func() // таку функцію можна викликати тільки після того, як вона описана (тобто нижче по коду)


// 3 - Arrow function - Стрілочні функції

let arrow = (arg) => {
    /////
}

let shotArrow = x => x * x; // Якщо стрілочна функція складається з одного рядка, то можна опустити слово return і {}