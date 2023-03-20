const cat = {
    name: 'Murka'
}

cat.age = 5;
//   5
 cat.name = 'Barsik';
//    'Barsik'
cat = {
test: 'value'
 }
/* Uncaught TypeError: Assignment to constant variable.
        at <anonymous>:1:5
*/
    cat
//    {name: 'Barsik', age: 5}