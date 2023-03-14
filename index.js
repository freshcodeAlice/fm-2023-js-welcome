/* Явне приведення: використовувати конструктори глобальних типів:

Number() - до числа
Boolean() - до логічного типу
String() - до рядка

*/



let userInput = '12345';
const dataType = typeof userInput;
// console.log(dataType);
let conv = Number(userInput);
console.log(conv);