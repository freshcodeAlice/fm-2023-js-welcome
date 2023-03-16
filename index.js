/*  if - else  */
/* if - else if - else */

function getDivider(number) {
    //  ПОГАНИЙ КОД!
    // if (number % 2 === 0) {
    //     console.log('Число ділиться на 2')
    // } else {
    //     if (number % 3 === 0) {
    //         console.log('Число ділиться на 3')
    //     } else {
    //         if (number % 5 === 0) {
    //             console.log('Число ділиться на 5')
    //         }
    //     }
    // }
  
    /*  if - else  */
    /* if - else if - else */

    if (number % 2 === 0) {
     console.log('Число ділиться на 2')
    } else if (number % 3 === 0) {
     console.log('Число ділиться на 3')
    } else if (number % 5 === 0) {
     console.log('Число ділиться на 5')
    } else {
     console.log('Число не ділиться ані на 2, ані на 3, ані на 5')
    }
   
}