const ninja = "Yoshi";

const message = "Hello";

function sayHiNinja() {
    return `${message} ${ninja}`;
} 

class CreateNewNinja {
    constructor(name) {
        this.name = name;
    }
    sayHiNinja() {
        return `Hello ${this.name}`;
    } 
}
export {message, sayHiNinja, CreateNewNinja};