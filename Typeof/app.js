/**
 * Primitive Data Type
 * 1. Number
 * 2. String
 * 3. Null
 * 4. Undefined
 * 5. Symbol
 * 6. BigInt
 * 7. Boolean
 * 
 * Reference Data Type
 * 1. Array
 * 2. Function
 * 3. Object
 */

// In JavaScript there are 5 different data types that can contain values:

/**
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Object
 * 5. Function
 */

console.log( typeof 10 );
console.log( typeof 'keya' );
console.log( typeof (10 > 8) );
console.log( typeof {fname: "Emon", lname: "Islam"} );
console.log( typeof function(){ return 10 } );

// There are 6 types of objects:

/**
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Date
 */
console.log( typeof new Number( 10 ) );
console.log( typeof new String( "I Love Bangladesh" ) );
console.log( typeof new Boolean( 10 > 8 ) )
console.log( typeof {fname: "Emon", lname: "Islam"} );
console.log( typeof  ["Banana", "Apple", "Lemon", "Guava" ] );
console.log( typeof new Date() ); 

// And 2 data types that cannot contain values:

/**
 * 1. Null
 * 2. Undefined
 */
console.log( typeof null )
console.log( typeof undefined )


// The typeof Operator
console.log( typeof "John" )                  // Returns "string"
console.log( typeof 3.14 )                    // Returns "number"
console.log( typeof NaN )                     // Returns "number"
console.log( typeof false )                   // Returns "boolean"
console.log( typeof [1,2,3,4] )               // Returns "object"
console.log( typeof {name:'John', age:34}  )   // Returns "object"
console.log( typeof new Date() )             // Returns "object"
console.log( typeof function () {} )         // Returns "function"
console.log( typeof myCar )                  // Returns "undefined" *
console.log( typeof null )                   // Returns "object"

// Difference Between Undefined and Null

/**
 * Null                         Undefined
 * i. Value Exit Kre Na         i. Value Nai Kinto Memory te refecence ace.
 * ii. Data Type Object         ii. Data Type Undefined
 */

let nullValue = null;
let undefinedValue = undefined;
console.log( nullValue == undefinedValue );
console.log( nullValue === undefinedValue )

let person = {
    fname: "Jhon",
    lname: "Doe",
    age: 36,
    fullName: function(){
        return this.fname + " " + this.lname;
    }
}

console.log( person )
// person = ""
// console.log( person )
// person = null;
// console.log( person )
// person = undefined;
// console.log( person )


// False Value
console.log( Boolean( "" ) );
console.log( Boolean( 0 ) );
console.log( Boolean( undefined ) );
console.log( Boolean( null ) );
console.log( Boolean( NaN ) );
console.log( Boolean( false ) );


// Converting Strings to Numbers
console.log( Number( "Jhon" ) );
console.log( Number( "10" ) );
console.log( Number( "" ) );
console.log( Number( " " ) );
console.log( Number( "99 89" ) );

console.log( Number( false ) )
console.log( String( false ) )
console.log( Boolean( false	 ) )

console.log( Number( true ) )
console.log( String( true ) )
console.log( Boolean( true ) )

console.log( Number( 0 ) )
console.log( String( 0 ) )
console.log( Boolean( 0 ) )

console.log( Number( 1 ) )
console.log( String( 1 ) )
console.log( Boolean( 1 ) )

console.log( Number( "0" ) )
console.log( String( "O" ) )
console.log( Boolean( "0" ) )

console.log( Number( "000" ) )
console.log( String( "000" ) )
console.log( Boolean( "000" ) )

console.log( Number( NaN ) )
console.log( String( NaN ) )
console.log( Boolean( NaN ) )

console.log( Number( Infinity ) )
console.log( String( Infinity ) )
console.log( Boolean( Infinity ) )

console.log( Number( -Infinity ) )
console.log( String( -Infinity ) )
console.log( Boolean( Infinity ) )

console.log( Number( "" ) )
console.log( String( ""	) )
console.log( Boolean( "" ) )

console.log( Number( "20" ) )
console.log( String( "20" ) )
console.log( Boolean( "20" ) )

console.log( Number( "twenty" ) )
console.log( String( "twenty" ) )
console.log( Boolean( "twenty" ) )

console.log( Number( [ ] ) )
console.log( String( [ ] ) )
console.log( Boolean( [ ] ) )




