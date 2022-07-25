// getPrimeLoop: for( let outerNum = 2; outerNum <= 10; outerNum++ ){
//     for( let innerNum = 2; innerNum < outerNum; innerNum++ ){
//         if(  outerNum % innerNum == 0) {
//             continue getPrimeLoop;
//         }
//     }
//     console.log(outerNum)
// }

// function getPrimeNumber( isNumber ){
//     for( let outerNum = 2; outerNum <= isNumber; outerNum++ ){
//        if( !isPrimeNumber( outerNum ) ){
//             continue;
//        }
//        console.log( outerNum );
//     }
// }
// getPrimeNumber(10)
 
// function isPrimeNumber( outerNum ){
//     for( let innerNum = 2; innerNum < outerNum; innerNum++ ){
//         if( outerNum % innerNum == 0 ){
//             return false;
//         }
//     }
//     return true;
// }

// for( let isNumber = 1; isNumber < 10; isNumber++ ){
//     if( isNumber % 2 == 0 ){
//         console.log( isNumber )
//     }
// }

// function getJorNumber( isNumber ){
//     for( let jorNumber = 1; jorNumber <= isNumber; jorNumber++ ){
//          if( !isJorNumber( jorNumber ) ) {
//             continue;
//         }
//         console.log( jorNumber );
//     }
// }

// getJorNumber(10);

// function isJorNumber( jorNumber ){
//     if( jorNumber % 2 == 0 ){
//         return true
//     }
// }

// let op = '/';
// function calculator( op ){
//     let result = arguments;
//     switch( op ){
//         case '+':
//             result = isNumberValue ( result );            
//             break;
//         case '-':
//             result = isNumberValue ( result );
//             break;
//         case '/':
//             result = isNumberValue ( result );
//             break;
//         case '*':
//             result = isNumberValue ( result );
//             break;
//         default:
//             result = "Provide valid information";
//     }
//     return result;
// }

// let numbers = calculator( op, 50, 10, 20 );

// console.log( numbers.reduce(sum) );

// function sum( total, value, index, array ){
//     if( op === '+' ){
//         total += value;
//     }
//     if( op === '-' ){
//         total -= value;
//     }
//     if( op === '*' ){
//         total *= value;
//     }
//     if( op === '/' ){
//         total /= value;
//     }
//     return total;
// }

// function isNumberValue( result ){
//     let totalValue = []
//     for( let i = 0; i < result.length; i++ ){
//         totalValue.push(result[i]);
//     }
//     totalValue.shift();
//     return totalValue;
// }


// const numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function forEachMethods( arr, callback ){ 
//     const newArray = [];
//     for( let i = 0; i < arr.length; i++ ){
//         newArray.push( callback( arr[i], i, arr ) );
//     }

//     return newArray;
// }
// const Add = function( value, index, array ){
//     return value += value;
// } 
// const sumResult = forEachMethods;
// console.log( sumResult( numberArray, Add ) )







// function myFunc( para1, para2 ){
//     return para1 + para2;
// }

// const sum = myFunc;
// console.log( sum );


// para1 = 10;
// para2 = 20;
// 10 + 20
//const sum = 30

// myFunc   0001  ddf0   ddf0 myFunc(){ retrun para1 + para2 }
// sum = myFunc
// sum( 10, 20 );

// const sum = function( para1, para2 ){
//     return para1 + para2;
// };

// console.log( sum( 10, 20 ) );



// const result = function (n){
//     const newFunc = function() {
//         if( n % 2 === 0 ){
//             return "Even Number";
//         }else {
//             return "Odd Number";
//         }
//     }
//     return newFunc;
// }
// console.log( result(15)() );

// console.dir( result(15) )

// function sum( a ){
//     // let a = 10;
//     return function () {
//         return a + 20;
//     }
// }

// console.dir( sum( 10 ) );



// const arrValue = [ 1, 2, 3, 4, 5, 6 ];
// let sumation = 0;
// arrValue.forEach( function( value, index, arr ){
//     sumation += value;
// } );
// console.log( sumation );


// function sum( value ){
//     let sum = 0
//     for( let i = 0; i < value.length; i++ ){
//         sum +=value[i]
//     }
//     return sum;
// }
// console.log( sum( arrValue ) );

// function getNumber( arr, cb ){
//     for( let i = 0; i < arr.length; i++ ){
//         cb( arr[i], i, arr );
//     }
// }

// getNumber( arrValue, function( value, index, arr ){
//     console.log( value, index, arr)
// } )



// function getMap( arr, cb ){
//     const newArray = [];
//     for( let i = 0; i < arr.length; i++ ){
//         newArray.push( cb( arr[i], i, arr ) )
//     }
//     return newArray;
// }
// let res = getMap( arrValue, function( value, index, arr ){
//     return value * 2;
// })


// console.log( res );

// const filterResult = arrValue.filter( function( value ){
//     return value > 4;
// } );
// console.log( filterResult );


// function getFilter( arr, cb ){
//     const newArray = [];
//     for( let i = 0; i < arr.length; i++ ){
//         if( cb( arr[i], i, arr ) ){
//             newArray.push( arr[i] );
//         }
//     }
//     return newArray;
// }
// const filResult = getFilter( arrValue, function( value, index, array ){
//     return value > 4;
// } );
// console.log( filResult );



// const reduceResult = arrValue.reduce( function( prev, next, index, acc ){
//     console.log( prev );
//     console.log( next )
//     console.log( index );
//     return prev + next;
// }, 0 );
// console.log( reduceResult );

// console.log( arrValue );

// function getReduce( arr, cb, acc ){
//     for( let i = 0; i < arr.length; i++){
//        acc = cb( acc, arr[i], i, arr );
//     }
    
//     return acc;
// }

// const getReducResult = getReduce( arrValue, function( prev, next, index, array ){
//     return prev + next;
// }, 0 );

// console.log ( getReducResult )

// const maxResult = getReduce( arrValue, function( prev, next ){
//     return Math.max( prev, next )
// }, arrValue[0] )
// console.log( maxResult )

// const arrValue2 = [ 5, 7, 8, 8 , 3, 2 ];
// const minResult = getReduce( arrValue2, function( prev, next ){
//     return Math.min( prev, next );
// }, arrValue2[0]);
// console.log( minResult )


// Function Declaration
// function funcName(){
//     // Code 
// }

// const funcName = function(){};

// const funcName2 = () => {}

// ( () =>{

// } )();

/**
 * Closure
 */


var num1 = 10;
var num2 = 20;
function Closure(){
    return num1 + num2;
}
console.dir( Closure );

function sum(){
    var num3 = 15;
    var num4 = 25;
    return function(){
        return num3 + num4;
    }
}
const add = sum();
console.dir( add );

// // var hoisting;
// // hoisting = undefined
// console.log( hoisting );
// var hoisting = "Bangladesh"; // hoisting = "Bangladesh";

// // let hoisting2;
// console.log( hoisting2 );
// let hoisting2 = "Bangladesh"; // hoisting2 = undefined; hoisting2 = "Bangladesh";

// var LANGUAGE = 'Java';
// var language = 'JavaScript';

// function getLanguage(){
//     // var language;
//     // language = undefined;
//     if(!language){
//         var language = LANGUAGE; //language = LANGUAGE
//     }
//     return language;
// }
// console.log( `I love ${getLanguage()}` );

// let LANGUAGE = 'Java';
// let language = 'JavaScript';

// function getLanguage(){
//     if( !language ){
//         // let language;
//         let language = LANGUAGE; // language = undefined;
//         // language = LANGUAGE;
//     }
//     return language;
// }
// console.log( `I Love ${language}` );

/**
 * Clousres
 */

( function(){ 
    "use strict";

    let closures1 = 20; 
    let closures2 = 20;
    function getClouser(){
        return function(){
            return closures1 + closures2;
        };
    } 
    const funcName = getClouser()
    console.dir( funcName );
} )();


/**
 * Hoisting
 */
// var person;
// person = undefined
console.log( person );
/**
 * person = {
 *      name: "Emon",
 *      age: 26
 * }
 */
var person = {
    name: 'Emon',
    age: 26
}

function myFunc(){
    console.log( 'Function Hoisting.' );
}
myFunc();

