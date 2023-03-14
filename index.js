/* Логічні оператори  */
/* Все приводять (неявно) до логічного типу
0, null, undefined, '', NaN ---> false
всі інші значення (і пусті об'єкти) ---> true


*/

// ! - логічне НЕ


!true
//false
!false
//true
!NaN
//true
!!true
//true
!!false 
//false - подвійне заперечення, яке використовується для швидкого неявного приведення до булеану
!!'1'
//true
!!''
//false
Boolean('1') 
//true - але краще використовувати явне



//// Оператори порівняння

5 > 6 
//false
5 < 6
//true
3 > 8
//false
2 >= 2
//true
2 <= 2
//true


/// Порівняння літер здійснюється за таблицею Unicode



//// == та ===


5 == 5
//true
4 == 5
//false
let age = 18;
//undefined
age == 18
//true
age == 20
//false
age != 20
//true
age != 18
//false


// == приводить операнди до одного типу даних. Т.зв. оператор порівняння з приведенням, або оператор порівняння за значенням

5 == 5
//true
5 == '5'
//true
true == 1
//true



// === - не приводить операнди, порівнюючи їх і за значенням, і за типом. "Строге дорівнює"
5 === 5
//true
4 === 5
//false
5 === '5'
//false
true === 1
//false


/// Логічне "І" (або р. "логическое И")////
// && 
// Повертає true, якщо І один, І другий операнди == true
// Повертає перший false-операнд, або (тільки якщо всі true) - останній true

true && true
//true
1 && true
//true - оператор приводить всі операнди до булеанівського типу!
true && false
//false
false && false
//false

true && false && true
//false
true && true && true
//true

// Повертає перший false-операнд, або (тільки якщо всі true) - останній true

"1" && true
//true
"" && true
//''
undefined && true
//undefined
0 && 1
//0
1 && true && "cat"
//'cat'
"" && true && false && undefined
//''
2 && "222" && 1n
//1n
2 && "222" && ""
//''





///// Логічне "АБО" (р."логическое ИЛИ") ///
// ||
// Якщо хоча би хтось з операндів - true, то повертається true

// Повертає ПЕРШИЙ true-операнд або (якщо жодного true не зустрів) - останній false

true || true
//true
true || false
//true
false || true
//true
false || false
//false




10 > 15
//false
10 < 15
//true
(10 > 15) && (15 < 20)
//false
(10 - 5) && (2-2) 
//0
let res1 = 10 - 5;
//undefined
let res2 = 2 - 2;
//undefined
res1
//5
res2;
//0
res1 && res2
//0
5 > 6 
//false