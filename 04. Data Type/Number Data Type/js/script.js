let message = "JavaScript";
let num1 = 10;
let num2 = 0;

let addition    = num1 + num2;
let subtract    = num1 - num2;
let multiply    = num1 * num2;
let divide      = num1 / num2;

console.log( addition );
console.log( subtract );
console.log( multiply );
console.log( divide );

console.log( message + num1 );
console.log( message - num1 );
console.log( message * num1 );
console.log( message / num1 );

document.getElementById("add").innerHTML = addition;
document.getElementById("sub").innerHTML = subtract;
document.getElementById("mul").innerHTML = multiply;
document.getElementById("div").innerHTML = divide;




