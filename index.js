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

const diagonal = Math.sqrt(lengthValue * lengthValue + widthValue * widthValue);

console.log(diagonal);


const cat2 = {
    name: 'Barsik',
    girlfriend: {
        name: 'Murka',
        child: {
            name: 'Kitty1'
        }
    }
}


/// Витягти в нові змінні імена подружки Барсіка і ім'я першого кошенятка

const {girlfriend: {name: barsikGirl, child: {name: childName}}} = cat2;
console.log(barsikGirl);
console.log(childName);

const array = [2, 3, 4, 5, 6];


const [firstElem, secondElem, , , fourthElement] = array;
console.log(firstElem);
console.log(secondElem);
console.log(fourthElement);



const cat3 = {
    name: 'Barsik',
    girlfriend: {
        name: 'Murka',
        child: [{
            name: 'Kitty1'
        }, {
            name: 'Kitty2'
        }, {
            name: 'Kitty3'
        }]
    }
}

const {girlfriend: {child: [{name: firstChildName}]}} = cat3;

console.log(firstChildName);