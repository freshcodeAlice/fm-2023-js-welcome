/// Виключення - Exceptions (Error)

/** JSDoc
 * 
 * @param {Number} num - Number thar will power
 * @param {Number} exp - Exponent (power)
 * @throws {TypeError} - If arguments is incorrect
 * @throws {RangeError} - If exp < 0
 * @returns {Number}
 */

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

/// try...catch

/*
try {
    /// блок коду, який потенційно може виплюнути помилку
} catch(error) {
    // блок коду, який виконається в разі, якщо в try ми зловили помилку. Об'єкт помилки буде лежати в error
}

*/


//pow(2, -1);


try {
    pow(2, -1);
// якщо сталася помилка - блок  try не виконується далі, а одразу провалюється в catch
    console.log('Try-try-try');
} catch(myError) {
    console.log('Some error happening');
    console.log(myError.message);
}



console.log('There is my additional code');