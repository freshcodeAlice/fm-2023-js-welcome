const cat1 = {
    name: 'Murzik',
    age: 3,
}


const cat2 = {
    name: 'Murochka',
    age: 2,
}

const cat3 = {
    name: 'Barsik',
    age:4
}

const catProto = {
    sayMeow: function(){
        return `${this.name} say meow`
    }
}


/// __proto__

cat1.__proto__ = catProto;
cat2.__proto__ = catProto;
cat3.__proto__ = catProto;


function Cat(name, age) {
    this.name = name;
    this.age = age;
}


Cat.prototype = catProto;

const cat4 = new Cat('sss', 2);
const cat5 = new Cat('eeee', 1);