'use strict'

const monitor = {
   sizes: {
    length: {
        value: 20,
        scale: 'sm'
    },
    width: {
        value: 30,
        scale: 'sm'
    }
   },
    brightness: '2000lm',
   color: 'black',
   manufacturer: {
        name: 'Sony',
        address: {
            city: 'London',
            street: 'Baker',
            house: 27
        }
   }

}

// d = Math.sqrt(a*a + b*b);

// const lengthValue = monitor.sizes.length.value;
const {sizes: {
        length: {value: lengthValue},
        width: {value: widthValue}
        },
        manufacturer: {
            address: {
                city: manufacturerCity
            }
        }
    } = monitor;


//const widthValue = monitor.sizes.width.value;
//const manufacturerCity = monitor.manufacturer.address.city;

//const diagonal = Math.sqrt(lengthValue * lengthValue + widthValue * widthValue);


function getDiagonal({sizes: {
    length: {value: lengthValue},
    width: {value: widthValue}
    },
    manufacturer: {
        address: {
            city: manufacturerCity
        }
    }
}) {
   return Math.sqrt(lengthValue * lengthValue + widthValue * widthValue);
}


function getUserHello({name}) {
    return `Hello, ${name}`
}

const user = {
    name: 'John',
    lastName: 'Doe'
}

getUserHello(user)




function getSumOfProperties({prop1, prop2, prop3}) {
    return prop1 + prop2 - prop3
}

getSumOfProperties({
    prop1: 2,
    prop2: 3,
    prop3: 4
});




function getSumOfFirstThreeElements([a, b, c, ...restArray]) {
    return a + b + c;
}

/// Напишіть мені функцію, яка приймає масив, деструктурує перший елемент і повертає сумму першого елемента і останнього

function getFirstAndLast([first, ...rest]) {
    return first + rest[rest.length - 1];
}