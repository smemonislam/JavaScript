// /**
//  * Creating an Array
//  */

// const cars1 = [ "Saab", "Volvo", "BMW" ];

// /**
//  * Using the JavaScript Keyword new
//  */

// const cars2 = new Array("Saab", "Volvo", "BMW");

// /**
//  * Accessing Array Elements
//  */

// console.log( cars1[0] );
// console.log( cars1[1] );
// console.log( cars1[2] );

// console.log( cars2[0] );
// console.log( cars2[1] );
// console.log( cars2[2] );

// function arrLoop( value ){
//     console.log( value );
// }

// cars1.forEach( arrLoop );

// /**
//  * Changing an Array Element
//  */
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = 'Opel';
// cars[1] = 'Honda';
// cars[2] = "Suzuki";

// console.log( cars );

// /**
//  * Insert an Array First Element
//  */

// cars.unshift( "Saab" );
// console.log( cars );


// /**
//  * Delete an Array First Element
//  */
// cars.shift();
// console.log( cars );

// /**
//  * Insert an Array Last Element
//  */

// cars.push( "BMW" );
// console.log( cars );

// /**
//  * Delete an Array Last Element
//  */

// cars.pop();
// console.log( cars );


// console.log( cars.length );



// /**
//  * Refecence Type Array
//  */


// const person = [ "Emon", "Keya", "Mezar", "Nusaiba" ];

// const person2 = person;
// person2.push( "Bappy", "Momtahina" );

// console.log( person, "person" )
// console.log( person2, "person2" );



/**
 * JavaScript Array Methods
 */
/**
 * Converting Arrays to Strings
 */

// toString() Methods
// const arrToStrings = [ 'Emon', 'Keya', 'Mezar', 'Nusaiba' ];
// console.log( arrToStrings.toString() );
// const str = arrToStrings.toString();
// console.log( typeof str );
// console.log( arrToStrings );

// join() Methods
// console.log( arrToStrings.join( ' ' ) );
// console.log(typeof arrToStrings.join( ' ' ) );


/** 
 * Insert data in array
 */
// const insert = [ 'Emon', 'Keya', 'Mezar', 'Nusaiba' ];

// insert[0] = 'Bappy';
// insert[1] = 'Momtahina';

// insert.unshift( 'Kamrul', 'Deloara', 'Bappy', 'Momtahina' );
// insert.splice( 4, 0, 'Kamrul', 'Deloara', 'Bappy', 'Momtahina')
// console.log( insert );

// const len = insert.length;
// insert[len] = "Family";
// insert[len - 1] = 'Family';
// insert.push( 'Kamrul', 'Deloara', 'Bappy', 'Momtahina' )
// console.log( insert );

/** 
 * Delete data in array
 */ 

// insert[0] = '';
// insert[1] = undefined;
// insert[2] = null;

// insert.pop();
// insert.shift();

// insert.splice( 2, 1 );

// console.log( insert.slice( 0, 2 ) )

// delete insert[0];
// console.log( insert );

/**
 * Merging (Concatenating) Arrays
 */
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// console.log( myBoys.concat( myGirls ) );

/**
 * Sorting an Array
 */
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log( fruits.sort() );
// console.log( fruits );
// console.log( fruits.reverse() );

/**
 * Numeric Sort
 */

// const points = [40, 100, 1, 5, 25, 10, -8, -2, 7, '25', '100'];

// points.sort( function( a, b ) {
//     return a - b;
// })

// console.log( points );

// points.sort( function( a, b ) {
//     return b - a;
// });
// console.log( points );

// points.sort( function( a, b ) {
//     if( a > b ){
//         return 1;
//     }else if( b > a ){
//         return -1;
//     }else {
//         return 0;
//     }
// })

// points.sort( function( a, b ){
//     if( a > b){
//         return -1;
//     }else if( a > b ){
//         return 1;
//     }else {
//         return 0;
//     }
// })
// console.log( points );

// const personSort = [ 
//     {
//         'name': "Emon",
//         'age': '25'
//     },
//     {
//         'name': "Mezar",
//         'age': '23'
//     },
//     {
//         'name': "Keya",
//         'age': '22'
//     },
//     {
//         'name': "Nusaiba",
//         'age': '2'
//     }
// ]
// personSort.sort( function( a, b ) {
//     return a.age - b.age;
// });
// console.log( personSort );

/**
 * Find the Highest (or Lowest) Array Value
 */

// points.sort( function( a, b ) {
//     return a - b;
// });

// const maxNumber = points[points.length - 1];
// const minNumber = points[0]
// console.log( maxNumber );
// console.log( minNumber );

// console.log( Math.max.apply( null, points ) );
// console.log( Math.min.apply( null, points ) );

// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//         console.log(len)
//         if (arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// }
// myArrayMax( [1, 2, 3, 4 ])


// function myArrayMin(arr) {
//     let len = arr.length;
//     let min = Infinity;
//     while (len--) {
//         if (arr[len] < min) {
//             min = arr[len];
//         }
//     }
//     return min;
// }
// myArrayMin( [1, 2, 3, 4 ] )

/**
 * JavaScript Array Iteration
 */
const numbers = [ 45, 4, 9, 16, 25 ];
// let sumation = 0;
// numbers.forEach( function ( value, index, array ) {
//     sumation += value;
// })
// console.log( sumation );

// function getforEach( arr, cb ){    
//     for( let i = 0; i < arr.length; i++ ){
//         cb( arr[i], i , arr );
//     }
// }

// let sum = 0;
// getforEach( numbers, function( value, index, array ){
//     sum +=value
// } );
// console.log(  sum );

// const mapResult = numbers.map( function( value, index, array ){
//     return value * value;
// });
// console.log( mapResult );

// function getMap( arr, cb ){
//     let mapArray = [];
//     for( let i = 0; i < arr.length; i++ ){
//         mapArray.push( cb( arr[i], i , arr ) );
//     }
//     return mapArray;
// }
// getMap( numbers, function( value, index, array ){
//     console.log( value * value );
// });

// const filterResult = numbers.filter( function( value, index, array ){
//     return value >= 16;
// } );
// console.log( filterResult );

// function getFilter( arr, cb ) {
//     let filterArray = [];
//     for( let i = 0; i < arr.length; i++ ){
//         if( cb( arr[i], i, arr ) ){
//             filterArray.push( arr[i] );
//         }
//     }
//     return filterArray;
// }
// const getFilterResult = getFilter( numbers, function( value, index, array){
//     return value > 16;
// })
// console.log( getFilterResult );

// const reduceResult = numbers.reduce( function( prev, curr, index, acc ){
//     return Math.min( prev, curr )
// } );
// console.log( reduceResult );

// function getReduce( arr, cb, acc ){
//     for( let i = 0; i < arr.length; i++ ){
//         var acc = cb( acc, arr[i] );
//     }
//     return acc;
// }
// const getReduceResult = getReduce( numbers, function( prev, curr ){
//     return prev + curr;
// }, 0 );
// console.log( getReduceResult );

// const everyResult = numbers.every( function( value, index, array){
//     return value > 1;
// } );
// console.log( everyResult );

// function getEvery( arr, cb ) {
//     let newArray = [];
//     for( let i = 0; i < arr.length; i++ ){
//         if( cb( arr[i], i, arr ) ){
//             newArray.push( arr[i] );
//         }
//     }
//     if( newArray.length === arr.length ){
//         return true;
//     }else{
//         return false;
//     }
// } 
// const getEveryResult = getEvery( numbers, function( value, index, array ){
//     console.log( value )
//     return value > 18;
// });
// console.log(  getEveryResult );

// const someResult = numbers.some( function( value, index, array ){
//     return value > 18;
// });
// console.log( someResult );

// function getSome( arr, cb ){
//     for( var i = 0; i < arr.length; i++){
//         if( cb( arr[i], i, arr ) ){
//             return true
//         }else{
//             return false;
//         }
//     }
// }

// const getSomeResult = getSome( numbers, function( value, index, array ){
//     return value > 18;
// })
// console.log( getSomeResult );

// console.log( numbers.indexOf(45) + 1 )

// const numbers2 = [  1, 2, 3, 4, 5, 6, 7, 65, 90, 100, 10, 15, 20, 30, 40, 50 ];
// const getFind = numbers2.find( function( value, index, array ){
//     if( value === 65 ){
//         return value;
//     } 
// } );
// console.log( getFind );

// const numbers2 = [4, 9, 16, 25, 29];
// const getFindIndex = numbers2.findIndex( function( value, index, array ){
//     return value > 18;
// })
// console.log( getFindIndex );

// const copy = Array.from( numbers );
// console.log( copy );

// copy[0] = 20;
// console.log( numbers );
// console.log( copy );

// const abc = Array.from( "ABCDEFGH" );
// console.log( abc );