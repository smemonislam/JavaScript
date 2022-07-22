/**
 * Array
 */
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
let sum = 0;
for( let i = 0; i < arr.length; i++ ) {
    if( arr[i] % 2 === 0){
        sum += arr[i];
    }
}
console.log( sum );

console.log( arr.length );
// Array Insert

// arr[4] = 9;
// arr.push(9);
// arr.unshift(9);
// arr.splice( 8, 0, 9,10,11 )

// Array Delete
// arr[2] = null;
// arr[3] = undefined;
// arr.pop();
// arr.shift()
// arr.splice(1,3);
console.log(arr);


const arr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
console.log( arr2.length );
// Insert Data in array
// arr2[2] = '333';
// arr2.push(333);
// arr2.unshift(333);
arr2.splice(2, 0, 333, 4444);

// arr2[8] = null;
// arr2[8] = undefined;
// arr2.pop();
// arr2.shift();
arr2.splice( 2, 2 );

console.log( arr2 );



const arrReverse = [ 1, 2, 3, 4, 5 ];
// for( let i = 0; i < arrReverse.length / 2; i++ ){
//     let temp = arrReverse[i];
//     arrReverse[i] = arrReverse[arrReverse.length - 1 - i];
//     arrReverse[arrReverse.length - 1 - i] = temp;
// }

// console.log( arrReverse.reverse() );

// console.log( arrReverse.join( ' | ' ) );

// console.log( arr.concat( arrReverse ) );

// console.log( Array.from( arrReverse ) );

// console.log( arrReverse.fill( null ) );


function arrayReverse( arrReverse ){
    for( let i = 0; i < arrReverse.length / 2; i++ ){
        let temp = arrReverse[i];
        arrReverse[i] = arrReverse[arrReverse.length - 1 - i];
        arrReverse[arrReverse.length - 1 - i] = temp;
    }
    return arrReverse;
}

console.log( arrayReverse( arrReverse ) );

function arraySearch( searchValue, find ){
    for( let i = 0; i < searchValue.length; i++ ){
        if( searchValue[i] === find ){
            return true;
        }
    }
    return false;
}

let findValue = arraySearch( arrReverse, 55 );
console.log( findValue );




