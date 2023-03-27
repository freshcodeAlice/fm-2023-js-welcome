/// Виключення - Exceptions (Error)

function pow(num, exp) {

    if(typeof num !== 'number' || typeof exp !== 'number'){
        throw new TypeError('Argument must be a number');
    }

    if(exp < 0) {
        throw new RangeError('Exp must be a positive number');
    }

    if (exp === 1) {
        return num
    }
    let result = num;
    for (let i = 1; i < exp; i++) {
        result*=num
    }

    return result;
}


/*
Дописати цю функцію таким чином, щоби при передачі від'ємного ступеня викидалася відповідна помилка

*/