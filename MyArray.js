function MyArray() {
    this.length = 0;

    for(let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }

}


function MyProtoArray() {
    this.push = function(value) {
        this[this.length] = value;
        this.length++;
    }

    this.pop = function() {
        const lastItem = this[this.length-1];
       delete this[this.length-1];
       this.length--;
       return lastItem;
    }

    this.forEach = function(fn){ 
        for (let i = 0; i < this.length; i++) {
            fn(this[i]);
        }
    }
}


const protoArray = new MyProtoArray();
MyArray.prototype = protoArray;

