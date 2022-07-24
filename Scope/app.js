/**
 * Block Scope
 * Function Scope
 * Global Scope 
 **/

{
    const x = 10;
}
// x can be used here

{
    let x = 10;
}
// x can NOT be used here

{
    var x = 10;
}
// x can be used here

/**
 * Local Scope
 */

// code here can NOT use carName
function myFunction1() {
    let carName = "Volvo"; // Function Scope
    // code here CAN use carName

    /**
     * Local variables have Function Scope
     * They can only be accessed from within the function.
     */
}
// code here can NOT use carName
function myFunction2() {
    var carName = "Volvo";   // Function Scope
}

function myFunction3() {
    const carName = "Volvo";   // Function Scope
}

/**
 * Global JavaScript Variables
 * 1. A global variable has Global Scope
 * 2. All scripts and functions on a web page can access it.
 */

var num1    = 10;  // Global scope
let num2    = 10;  // Global scope
const num3  = 10;  // Global scope

// Automatically Global

// code here can use carName
function myFunction() {
    carName = "Volvo";
}
myFunction()


// {
//     console.log( typeof name );
//     let name = "jhon";
// }

// let babyAge = 1;
// let isBirthday = true;

// if( isBirthday ){
//     let babyAge = 2;
// }
// console.log( babyAge )

// console.log(str);
// var str = "Hello world";

// var a;  // declared hosse 
// a = undefined // undefined set krce
// console.log( a )
// var a = 50; // a = 50 assign hosse

// // let b
// console.log( b );
// let b = 10; // b = undefined declared hosse
//             // b = 10 then assign

// let value = 10;
// if(true){
//     let value = 20;
// }
// console.log( value );


// if(true){
//     value = 30;
// }
// console.log( value );

// function myFunc(){
//     value = 40;
// }
// myFunc();
// console.log( value )

// Functional Scope && Global Scope
var varVariable = "This is the var";
if( true ){
    var varVariable = "This is the var varibale";
    var varVariable = "This is the var variable again assian and redclared";
    console.log( varVariable )
}
console.log( varVariable );

// Block Scope && Global Scope
let letVariable = "This is the let";
if( true ){
    let letVariable = "This the let variable";
    letVariable = "This is the let variable and reassign value";
    console.log( letVariable );
}
console.log( letVariable );

// Block Scipe && Global Scope
const constVariable = "This is the cosnt";
if( true ){
    const constVariable = "This is the const variable";
    console.log( constVariable )
}
console.log( constVariable );





