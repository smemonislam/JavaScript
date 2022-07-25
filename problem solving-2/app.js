// input: linearSearch( [ 'a', 'b', 'c', 'd', 'c'], 'c' )
// output: 2 or 'Not found!'
// problem: linearSearch() টি implement করে দেখানো।

function linearSearch( input, search ){
    for( let i = 0; i < input.length; i++ ){
        if( input[i] === search ){
            return i;
        }
    }
    return 'Not Found!';
}
console.log( linearSearch( [ 'a', 'b', 'c', 'd', 'c'], 'c' ) );

// console.log( [ 'a', 'b', 'c', 'd', 'c'].indexOf( 'c' ) )

// কোনো Array থেকে কিভাবে সব থেকে বড় string খুজে বের করবেন এবং কিভাবে index বের করবেন?


const arrayStirng = [ "Emon", 'I Love Bangladesh', 'Keya', 'Mezar', 'Nusaiba' ];
function arrayToSearchString( names ){
    let longestWord = ''
    for( let name of names ){
        if( name.length > longestWord.length){
           longestWord = name;
        }
    }
    return [longestWord, names.indexOf( longestWord )];
} 
console.log( arrayToSearchString( arrayStirng ) );

// 1-100 পযর্ন্ত কোন সংখ্যাগুলো 3,5 এবং 3, 5 উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করুন।

function fizBuzz( number ){
    for( let i = 0; i < number; i++ ){
        if( i % 3 === 0 && i % 5 ===0 ){
            console.log( `${i} is FizzBuzz` )
        }else if( i % 3 === 0 ){
            console.log( `${i} is Fizz` )
        }else if( i % 5 === 0 ){
            console.log( `${i} is Buzz` )
        }else {
            console.log( `${i}` )
        }
     }    
}
fizBuzz( 100 ); 


// Array থেকে কিভাবে False ভ্যালু বের করে বাদ দিতে পারি?
const mixArr = [ 'lws', undefined, 'apple', null, 'Thans all', 0, false, 'Hello World', '', 'Banana', NaN ];

// console.log( mixArr.filter( Boolean )

const trueData = mixArr.filter( function( element ){
    if( element ){
        return true;
    }else{
        return false;
    }
} )
console.log( trueData );

// Object থেকে কিভাবে False ভ্যালু বের করে বাদ দিতে পারি?
const mixObj = { 
    a: 'lws', 
    b: undefined, 
    c: 'apple',
    d: null, 
    e: 'Thans all',
    f: 0, 
    g: false,
    h: 'Hello World',
    i: '',
    j: 'Banana', 
    k: NaN 
};
function trueDataObj( mixObj){
    //let trueDataObj = [];
    for( key in mixObj ){
        if( !mixObj[key] ){
            //trueDataObj.push( mixObj[key] );
            delete mixObj[key];
        }
    }
    //return trueDataObj;
    return mixObj
}
console.log( trueDataObj( mixObj ) )
