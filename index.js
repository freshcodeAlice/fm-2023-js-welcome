/* Цикли  */


/// Цикл - це повторення певного блоку коду задану кількість разів
// Одне повторення (захід виконання) наз. ітерація

/*
while(умова) {
    // блок коду, який буде виконуватись, поки умова = true
    // коли умова = false, ми виходимо з циклу
}
*/

debugger;

let counter = 0;

while(true) {
    console.log('loop is going');
    counter = counter + 1;
    if (counter > 3) {
        break;
    }
}

console.log('loop has ended');