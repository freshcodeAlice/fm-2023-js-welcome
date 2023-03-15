/* Функції  */

// Функція - це окремий, ізольований фрагмент коду, який має ім'я і за цим ім'ям до нього можна звернутись з різних частин загального коду

// 1 спосіб створення функції - Function Declaration

/*
function ім'яФункції(список аргументів) {
    блок коду функції
}

*/

function sumTwoAndTwo(){
    let sum = 2 + 2;
    console.log(sum);
}
/////////////////


// sumTwoAndTwo();


 function sumThreeAndThree() {
    let sum2 = 3 + 3;
    console.log(sum2);
 }


// sumThreeAndThree();


function sumTwoNumbers(arg1, arg2){
        let sum = arg1 + arg2;
        console.log(sum);
}


sumTwoNumbers(2, 3);

sumTwoNumbers(5, 10);

//console.log(sum);



function something(a1, a2, a3, a4, a5) {
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a5);

    console.log(a1 + a2 + a3 + a4 + a5);
}


something(1, 2, 3);



function something2() {
    console.log('hello');
}

something2(1, 2, 3);