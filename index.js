let num = Number(prompt('Type your number')); //'12' -> 12
// num = 'aaaaaa',  Number('aaaaaa')  -> NaN
let verdict = isNaN(num); // isNaN(12) --> false

if (verdict) {
    console.log('Its not a number')
} else {
    console.log(num + 2);
}

