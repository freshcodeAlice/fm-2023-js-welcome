'use strict'

// function declaration
function test() {
    console.log(this);
}

test()

// Function expression
const fn2 = function () {
    console.log(this);
}

fn2();


/// Arrow function
const arrfn = () => {
    console.log(this);
}

arrfn()