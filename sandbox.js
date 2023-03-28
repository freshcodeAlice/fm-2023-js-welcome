const cat = {
    name: 'Kit',
    sayHi: function(){
        return `${this.name} say Meowww`
    }
}

const animal = {
    type: 'cat'
}

const zoo = {
    name: 'Catttt',
    sayHi: function() {
        return `Meooowww`
    }
}
animal.__proto__ = zoo;
cat.__proto__ = animal;