///Замикання

// Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.

let value = 10;



function wrapper() {
    let value = 0;
    console.log('Wrapper function ---> ', value);

    const logValue = function () {
        console.log('LOG function --> ', value++);
    }

    return logValue;
}

const anotherFunc = wrapper();


const secondFunc = wrapper();