/**
 * Creating an Array
 */

const cars1 = [ "Saab", "Volvo", "BMW" ];

/**
 * Using the JavaScript Keyword new
 */

const cars2 = new Array("Saab", "Volvo", "BMW");

/**
 * Accessing Array Elements
 */

console.log( cars1[0] );
console.log( cars1[1] );
console.log( cars1[2] );

console.log( cars2[0] );
console.log( cars2[1] );
console.log( cars2[2] );

function arrLoop( value ){
    console.log( value );
}

cars1.forEach( arrLoop );

/**
 * Changing an Array Element
 */
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = 'Opel';
cars[1] = 'Honda';
cars[2] = "Suzuki";

console.log( cars );

/**
 * Insert an Array First Element
 */

cars.unshift( "Saab" );
console.log( cars );


/**
 * Delete an Array First Element
 */
cars.shift();
console.log( cars );

/**
 * Insert an Array Last Element
 */

cars.push( "BMW" );
console.log( cars );

/**
 * Delete an Array Last Element
 */

cars.pop();
console.log( cars );


console.log( cars.length );



/**
 * Refecence Type Array
 */


const person = [ "Emon", "Keya", "Mezar", "Nusaiba" ];

const person2 = person;
person2.push( "Bappy", "Momtahina" );

console.log( person, "person" )
console.log( person2, "person2" );