// let message = "JavaScript";
// let num1 = 10;
// let num2 = 0;

// let addition    = num1 + num2;
// let subtract    = num1 - num2;
// let multiply    = num1 * num2;
// let divide      = num1 / num2;

// console.log( addition );
// console.log( subtract );
// console.log( multiply );
// console.log( divide );

// console.log( message + num1 );
// console.log( message - num1 );
// console.log( message * num1 );
// console.log( message / num1 );

// document.getElementById("add").innerHTML = addition;
// document.getElementById("sub").innerHTML = subtract;
// document.getElementById("mul").innerHTML = multiply;
// document.getElementById("div").innerHTML = divide;


/** 
 * JavaScript Number Methods
 */

const number = 10;
console.log( typeof number );
console.log( typeof number.toString() );

let x = 9.656;
console.log( typeof x.toExponential(4) );
console.log( typeof x.toFixed(2) );
console.log( typeof x.toPrecision() );
console.log( typeof x.valueOf() );

console.log( Number(true) );
console.log( Number(false) );
console.log( Number("10") );
console.log( Number("  10") );
console.log( Number("10  ") );
console.log( Number(" 10  ") );
console.log( Number("10.33") );
console.log( Number("10,33") );
console.log( Number("10 33") );
console.log( Number("John") );
console.log( Number(new Date("1970-01-01") ) );
console.log( Number(new Date("1970-01-02") ) );
console.log( Number(new Date("2017-09-30") ) );

console.log( parseInt("-10") );
console.log( parseInt("-10.33") );
console.log( parseInt("10") );
console.log( parseInt("10.33") );
console.log( parseInt("10 20 30") );
console.log( parseInt("10 years") );
console.log( parseInt("years 10") );


console.log( parseFloat("10") );
console.log( parseFloat("10.33") );
console.log( parseFloat("10 20 30") );
console.log( parseFloat("10 years") );
console.log( parseFloat("years 10") );