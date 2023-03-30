//// Подвійні цикли

/// Намалювати в консолі квадрат 8*8 за допомогою символа "*"

// let str = '';
// for(let i = 0; i < 8; i++) {
//     for(let j = 0; j < 8; j++) {
//         str+='*';
//     }
//     str += '\n'
// }


// console.log(str);


/// Намалювати трикутник 

function drowTriangle(dim) {
    let str = '';
    for(let i = 0; i < dim; i++) {
        for(let j = 0; j <= i; j++) {
               str+='*';
       }
        str += '\n'
    }
   
   
    console.log(str);
}
 


/// Задачка з *: Намалювати квадрат, всередині якого пусто

function drowEmptySquare(dim) {
    let str = '';
    for(let i = 0; i < dim; i++) {
        for(let j = 0; j < dim; j++) {
            if(i === 0 || i === dim-1 || j === 0 || j === dim-1 ) {
                str+='*';
            } else {
                str += ' ';
            }
    
       }
        str += '\n'
    }
    console.log(str);
}


//drowEmptySquare(10);

/// Намалювати прямокутник зі зворотньою діагоналлю


function drowEmptySquareWithDiagonal(dim) {
    let str = '';
    for(let i = 0; i < dim; i++) {
        for(let j = 0; j < dim; j++) {
            if(i === 0 || i === dim-1 || j === 0 || j === dim-1 || j === dim - i - 1) {
                str+='*';
            } else {
                str += ' ';
            }
    
       }
        str += '\n'
    }
    console.log(str);
}


drowEmptySquareWithDiagonal(10);