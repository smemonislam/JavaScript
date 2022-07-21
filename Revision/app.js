/**
 * Variables
 * var, let, const
 */
/**
 * var
 * i. Reassign 
 * ii. Re-Declarted 
 * iii. Functional Scope && Global Scope
 */
var varNum = 10;
console.log( varNum );
var varNum = varNum + 1;
console.log( varNum );
varNum = 20;
console.log( varNum );

function varScope(){
    var num1 = 20; // Local scope
    var total = num1 + varNum; // varNum Global Scope
    return total;
}
console.log( varScope() );

/**
 * let
 * i. Reassign
 * ii. Cannot Re-Declarted
 * iii. Global Scope && Block Scope
 */
let letNum = 100;
console.log( letNum );
letNum = letNum + 1;
console.log( letNum );
if( true ){
    let num1 = 10; // Block scope
    let total = num1 + letNum; // letNum Global Scope
    console.log( total ); 
}

/**
 * const
 * i. Cannot Reassign
 * ii. Cannot Re-Declarted
 * iii. Global Scope && Block Scope
 */

const constNum = 3.1416;
console.log( constNum );

if( true ){
    const num1 = 10; // Block scope
    const total = num1 + constNum; // Global Scope
    console.log( total );
}


/**
 * Data Type
 * 1. Primitive Data Type.
 * 2. Refecence Data Type.
 * 
 * ********************************
 * 1. Primitive Data Type
 *      i. Number
 *      ii. String
 *      iii. Boolean.
 *      iv. Null
 *      v. Undefined
 *      vi. Symbol
 *      vii. BigInt
 */

/**
 * 1. Number Data Type
 *      i. NaN
 *      ii. infinity 
 */

let number1 = 1000;
let number2 = 0;
let number3 = 10;
let number4 = "String";

let add = number1 + number2;
let subtract = number1 - number2;
let multiply = number1 * number2;
let divide = number1 / number2;

console.log( add );
console.log( subtract );
console.log( multiply );
console.log( divide ); 

console.log( number3 + number4 ); // Concatenation
console.log( number3 * number4 );
console.log( number3 / number4 );
console.log( number3 - number4 );

/**
 * JavaScript Number Methods
 */

let x = 123

console.log( typeof x.toString() );
console.log( x.toExponential(3) );

x = 9.656;
console.log( x.toFixed(2) );
console.log( x.toPrecision(1) );


console.log( Number( "10" ) );
console.log( Number( " 10 " ) );
console.log( Number( " 10.33 ") );
console.log( Number( "10.33" ) );
console.log( Number( "10,33" ) );
console.log( Number( "10 20 30" ) );
console.log( Number( "Jhon" ) ); 

console.log( parseInt( "10" ) );
console.log( parseInt( "10.33" ) );
console.log( parseInt( "10,33" ) );
console.log( parseInt( " 100 20 30 ") );
console.log( parseInt( "10 years ") );
console.log( parseInt( "years 10") );

console.log( parseFloat( "10" ) );
console.log( parseFloat( "10.33" ) );
console.log( parseFloat( "100 20 3000") );
console.log( parseFloat( "10 years" ) );
console.log( parseFloat( "years 10") );


/**
 * String
 */
let str1 = "Hello World!"; // Double quotes String
let str2 = 'Hello World!'; // Single quotes String

// Escape Character
let text1 = "We are the so-called \"Vikings\" from the north.";
let text2 = "We are the so-called \\Vikings\\ from the north.";

let strLiterals = "Jhon Doe";
let strObject = new String( "Jhon Doe" );

console.log( typeof strLiterals );
console.log( typeof strObject );
console.log( strLiterals == strObject );
console.log( strLiterals === strObject );

/**
 * JavaScript String Methods
 */

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log( txt.length );

// Extracting String Parts
console.log( txt.slice( 5, 8 ) );
console.log( txt.substring( 5, 8 ) );
console.log( txt.substr( 5, 3 ) );

// Replacing String Content
let text = "Please visit Microsoft!";
console.log( text.replace( "Microsoft", "Google" ) );

console.log( txt.toLowerCase() );
console.log( text.toUpperCase() );

let text3 = "Hello";
let text4 = "World";
let text5 = text3.concat(" ", text4);

console.log( text5 );

let text6 = " Hello World! ";
console.log( text6.trim() );

// Converting a String to an Array
console.log( text.split( " " ) );

text = "a,b,c,d,e,f";
console.log( text.split( "," ) );

console.log( text.split( "|" ) );
