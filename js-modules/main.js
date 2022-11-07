// Uncomment the commented code and comment the uncommented one to get the different flavors of import statements
//import { message, sayHiNinja, CreateNewNinja } from './modules/ninja.js';
import * as ImportNinja from './modules/ninja.js';

// console.log(message);
// let greetNinja = sayHiNinja();
// console.log(greetNinja);

// let ninja1 = new CreateNewNinja('Hattori');
// console.log(ninja1.sayHiNinja());

console.log(ImportNinja.message);
let greetNinja = ImportNinja.sayHiNinja();
console.log(greetNinja);

let ninja1 = new ImportNinja.CreateNewNinja('Hattori');

console.log(ninja1.sayHiNinja());