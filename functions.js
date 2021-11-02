/********************************************************
 Function DECLARATION vs EXPRESSION */

// function declaration
function funcDeclaration() {
    console.log("function declaration");
}

// function expression
const funcExpression = function () {
    console.log("function expression");
}

const fExp = funcDeclaration;
// console.log(fExp.name);




/********************************************************
 PURE Function */

// PURE FUNCTION - always returns the exact same things

const myArray = [1, 2, 3, 4];

function addElementToArrayPURE(arr, element) {
    return [...arr, element];
}

function plus2(n) {
    return n + 2
}

// console.log(plus2(4))
// console.log(plus2(4))
// addElementToArrayPURE(myArray,5)
// addElementToArrayPURE(myArray,5)
// console.log(myArray);
// console.log(addElementToArrayPURE(myArray,5));
// console.log(addElementToArrayPURE(myArray,5));

function addElementToArray(arr, element) {
    return arr.push(element)
}

// this is not a PURE function, it has a side effects
// addElementToArray(myArray, 5);
// addElementToArray(myArray, 5);
// console.log(myArray);




/********************************************************
 ARROW vs REGULAR FUNCTIONS
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

 - Regular function may be hoisted - you can declare regular function and call it before its declaration
 - Regular function may have name or may exist without name(anonymous)

 - Arrow functions always bind to the global object
 - Arrow function binds the "this" keyword to an object where that function was been defined
 - Arrow function doesn't have his own "this" -- arrow functions don't bind their own scope, but inherit
 it from the parent one. Arrow function takes the lexical scope and the Regular function takes the context surrounds his
 - The call, apply and bind methods are NOT suitable for Arrow functions -- as they were designed to allow
 methods to execute within different scopes -- because Arrow functions establish "this" based on the
 scope the Arrow function is defined within.
 - Arrow functions are the best choice when working with closures or callbacks, but not a good choice
 when working with class/object methods or constructors.
 - Arrow functions do not have a prototype property.
 var Foo = () => {};
 console.log(Foo.prototype); // undefined
 - Arrow function is always anonymous
 - Arrow function doesn't have access to the variable called arguments, in a Regular function we are
 able to access to arguments variable(which is an array of all arguments)
 */

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        setTimeout(function () {
            console.log('getName', this.name)
        }, 1000)
    }

    getNamArrow() {
        setTimeout(() => {
            console.log('getNamArrow', this.name)
        }, 2000)
    }
}

/***** try */
// let person = new Person('Bob');
// person.getName(); // this.name will be undefined and it won't print "Bob"
// person.getNamArrow(); // will print "Bob"


const obj_ES5 = {
    name: 'Bob',
    print: function () {
        console.log(this.name); // will print "Bob"

        setTimeout(function () {
            console.log(this.name) // this.name will be undefined and it won't print "Bob"
        }, 1000)
    }
};

const obj_ES6 = {
    name: 'Bob',
    print: function () {
        console.log(this.name); // will print "Bob"

        setTimeout(() => {
            console.log(this.name) // will print "Bob"
        }, 1000)
    }
};

/***** try */
// obj_ES5.print();
// obj_ES6.print();


/*****
 https://www.youtube.com/watch?v=HU1hlAW5nDw
 watch from 7:18 minutes
 */
const obj_lexical_scope_ES6 = {
    name: 'Bob',
    print: () => { // <-- arrow fuction
        console.log(this.name); // will be undefined
    }
};

/***** try */
// obj_lexical_scope_ES6.print();




///////////////////////////////////////////////////
const myFunction = () => {
    console.log('myFunction', this);
};

function myFunc() {
    console.log('myFunc', this);
}

// myFunction();
// myFunc();