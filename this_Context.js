/*
 THIS -> it is the object that is executing the current function.
 So without any context this refers to the global object (which in a browser is the Window)

 in a standard/regular function this refers to the global object(or Window) since the function is
 being executed from the global object

 * */

function testThis() {
    console.log(this);
}

/*
 testThis(); // Window{...}
 */


const user = {
    firstName: "John,",
    lastName: "Doe",
    fullName() {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

/*
 user.fullName()
 // this now refers to the object in which it is called
 // {firstName: "John", lastName: "Doe, fullName: f}
 // John Doe
 */


function Person(name) {
    this.name = name;
    console.log(this);
}

// const newPerson = new Person("John");
// will print
// Person {name: "John"}


class UUU {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    fieeeeeeeld = 4;

    func = () => {
        console.log("func", this);
    }
}

let u = new UUU(1, 22);
// u.func();
console.log(u.__proto__)

const user1 = {
    firstName: "John,",
    lastName: "Doe",
    pets: ["cat", "dog", "fish"],
    listPets() {
        // console.log(this);
        this.pets.forEach(function (pet) {
            console.log(`${this.firstName}'s ${pet}`);
        });
    }
};

user1.listPets.call(user1);
