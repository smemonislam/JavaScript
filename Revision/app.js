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
text = "a|b|c";
console.log( text.split( "|" ) );

//JavaScript Search Methods

let str = "Please locate where 'locate' occurs!";

console.log( str.indexOf( "locate" ) );  
console.log( str.lastIndexOf( "locate" ) );
console.log( str.search( "locate" ) );

let text7 = "Hello world, welcome to the universe.";
console.log( text7.includes( "universe" ) );

/**
 * Boolean
 */

// Boolean represents one of two values
/**
 * yes/no
 * true/false
 * on/off
 * 1/0
 */

console.log( Boolean( 10 > 9 ) );
console.log( Boolean( 0 ) );
console.log( Boolean( -0 ) );
console.log( Boolean( "" ) );
console.log( Boolean( undefined ) );
console.log( Boolean( null ) );
console.log( Boolean( false ) );
console.log( Boolean( 10 / "Hallo" ) );


/**
 * Null
 */

// Faka Ekti Value/ Kichu Na/ Emon Ekti value jeta amr jana nei.
let value = null;

/**
 * undefined
 */

let value2;

/**
 * Rerecence Data Type
 *      i. Array
 *      ii. Object
 *      iii. Function
 */

/**
 * Array
 */

// Array Declaration
let arr1 = [ "Emon", "Keya", "Mezar", "Nusaiba" ];
let arr2 = new Array( "Emon", "Keya", "Mezar", "Nusaiba" );

console.log( typeof arr1 );

// Accecessing in array element
console.log( arr1[0] );
console.log( arr1[1] );
console.log( arr1[2] );
console.log( arr1[3] );

// Accessing the First Array Element
console.log(  arr1[0] );

// Accessing the Last Array Element
console.log( arr1[arr1.length - 1] );

// Looping Array Elements
for( let i = 0; i < arr1.length; i++ ){
    console.log( arr1[i] );
}

/**
 * The Difference Between Arrays and Objects
 * In JavaScript, arrays use numbered indexes. 
 * In JavaScript, objects use named indexes.
 */

// JavaScript Array Methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log( fruits.length );

// Insert Element in array.
//************************//

// fruits[0] = "Lemon";
// fruits.unshift( "Lemon" );
// fruits.splice( 1, 0, "Lemon" );
// console.log( fruits );

// fruits[fruits.length] = "Lemon";
// fruits[fruits.length-1] = "Lemon";
// fruits.push( "Lemon" );
// fruits.splice( 3, 0, "Lemon" );
// console.log( fruits );

// Delete Element in array
// *********************//

// fruits['0'] = null;
// fruits[0] = undefined;
// fruits.shift();
// fruits.splice( 0, 1 );
// delete fruits[0];

// fruits[fruits.length - 1] = null;
// fruits[fruits.length - 1] = undefined;
// fruits[fruits.length - 1] = "";
// fruits.pop();
// console.log( fruits );

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// console.log( myGirls.concat( myBoys ) );

/**
 * JavaScript Sorting Arrays
 */ 

// fruits.sort();

// console.log( fruits );
// fruits.reverse();
// console.log( fruits );

const points = [40, 100, 1, 5, 25, 10];
// points.sort( function( a, b ){
//     return a - b;
// } );
// console.log( points );

// points.sort( function( a, b ){
//     return b - a;
// } );
// console.log( points );

// console.log( Math.max.apply( null, points ) );
// console.log( Math.min.apply( null, points ) );

// points.forEach( function( value, index, array ){
//     console.log( value )
// } );

// const resultValue = points.map( function( value, index, array ){
//     return value * value;
// } );
// console.log( resultValue );

// const resultValue = points.filter( function( value ){
//     return value > 9;
// } );
// console.log( resultValue );

// const resultValue = points.reduce( function( prev, curr ){
//     return prev + curr;
// } );
// console.log( resultValue );

// const resultValue = points.every( function( value ){
//     return value > 16;
// } );

// console.log( resultValue );

// const resultValue = points.some( function( value ){
//     return value > 16;
// } );
// console.log( resultValue );

// const resultValue = points.indexOf( 40 ) + 1;
// console.log( resultValue );

// const fruitsName = ["Apple", "Orange", "Apple", "Mango"];
// console.log( fruitsName.lastIndexOf( "Apple" ) + 1 );


// const numbers = [4, 9, 16, 25, 29];
// const resultValue = numbers.find( function( value ){
//     return value > 9;
// } )
// console.log( resultValue );

// const resultValue = numbers.findIndex( function( value ){
//     return value > 16;
// });
// console.log( resultValue )

// const stringValue = "ABCDEF";
// const resultValue = Array.from(stringValue);
// console.log( resultValue );


/**
 * Object
 */

const person = {
    fName: "Emon",
    lName: "Islam",
    age: 26,
    fullName: function(){
        return this.fName + " " + this.lName;
    }
}

/**
 * Accessing the object properites
 * objectName.key_name
 * objectName['key_name']
 * 
 * Accessing the object mehtods
 * 
 * objectName.keyName()
 */
console.log( person.fName ); // objectName.key_name
console.log( person['lName'] ); // objectName['key_name']
console.log( person.fullName() ); // objectName.key_name()


/**
 * Function
 */
// Function Declarations
// function funcName( parameters ){
//    // code to be executed   
// }

// function add( num1, num2 ){
//     console.log( num1 + num2 ); // 30
// }
// const anotherAdd = add( 10, 20 ); // anotherAdd = undefined

// function sleep(){
//     return "I am sleeping in 11.00 AM Regular";
// }
// const anotherSleep = sleep(); // anthoerSleep = "I am sleeping in 11.00 AM Regular";

// // Function Expressions
// const functionExpression = function( parameters ){
//     // code to be executed   
// };

// // Self-Invoking Functions
// (function( parameters ){ //IIFE
//     // code to be executed  
// })()

// // Arrow Functions
// const arrow = () => {
//     // code to be executed 
// }

const number = [1, 123, 500, 115, 44, 88];
function findMax( arr ){
    let max = arr[0];
    for( let i = 0; i < arr.length; i++ ){
        // 1 > 1 false  max = 1
        // 123 > 1 true max = 1
        // 500 > 123 true max = 123
        // 115 > 500 false max = 500
        // 44 > 500 false max = 500
        // 88 > 500 false max = 500

        if( arr[i] > max ){
            max = arr[i] 
        }
    }
    return max;
}
console.log( findMax( number ) )

const number23 = [2, 1, 123, 500, 115, 44, 88];
function findMin( arr ){
    let min = arr[0];
    for( let i = 0; i < arr.length; i++ ){
        // 2 < 2 false min = 2
        // 1 < 2 true min = 1
        // 123 < 1 false min = 1
        // 500 < 1 false min =1
        if( arr[i] < min ){
            min = arr[i];
        }
    }
    return min;
}
console.log( findMin( number23 ) );

function helloThis(){
    console.log( this );
    function innerThis(){
        console.log( this )
    }
    innerThis()
}
helloThis()

const obj = {
    name: "Emon",
    age: 26,
    helloThis: function(){
        console.log(this);
        function innerThis(){
            console.log( this );
        }
        innerThis();
        (()=>{
            console.log(this)
        })();
    }
}
obj.helloThis();

// let counter = 0;
// function count(){
//     let counter = 0;
//     return counter += 1;
// }
// console.log( count() );
// console.log( count() );
// console.log( count() );
// console.log( counter )

function temporay(){
    let counter = 0;
    return () => counter++;
}
const count = temporay();
count(); 

/**
 * Probelm Solving
 */

// কি ভাবে আমরা শ্রেনিকক্ষের সকলের নাম Alphabeticlay সাজাতে পারি?

const className = [ "Hafizur Rahman", "Al Mamun", "Emon Islam", "Jahid Hasan" ];
console.log( className.sort() );

// কিভাবে আমরা শ্রেনিকক্ষের রোল নাম্বর ক্রম হিসাবে সাজাতে পারি?

const rollNumber = [ 10, 2, 15, 9, 1, 7, 14, 3, 12, 5, 11, 4, 8, 13 , 6];
console.log( rollNumber.sort( function( a, b ){
    return a - b;
} ) );

// কোন সাল Leap Year না তা কিভাবে বের করতে পারি?

function isLeapYear( year ){
    let leapYear;
    if( ( year % 400 === 0 ) || ( year % 4 === 0 && year % 100 !== 0 ) ){
        leapYear = "Is Leap Year";
    }else{
        leapYear = "Is Not Leap Year";
    }
    return leapYear;
}
console.log( isLeapYear( 2032 ) );

// কোন sentence এ কতগুলো vowel আছে তা নির্ণয় করবো কিভাবে?

const vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ]

function isSentece( sentence ){
    let count = 0;
    let letters = Array.from( sentence );
    letters.forEach( function( value  ){
        if( vowels.includes( value ) ){
            count++;
        }
    } );
    return count;
}
console.log( isSentece( "I Love Bangladesh" ) );

// কোন Array থেকে Duplicate নম্বর বের করতে পারি কিভাবে?
const arrNumber = [ 1, 4, 5, 5, 6, 7, 4, 9, 10, 11 ];

const duplicateNumber = arrNumber.filter( function( value, index, array ){
    return array.indexOf( value ) !== index;
} )

// কোন Array থেকে unique নম্বর বের করতে পারি কিভাবে?
const uniqueNumber = arrNumber.filter( function( value, index, array ){
    return array.indexOf( value ) === index;
} )
console.log( uniqueNumber )