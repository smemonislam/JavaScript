// const num1 = +prompt( "Input first number");
// const num2 = +prompt( "Input second number");

// function add(num1, num2) {
//     return num1 + num2;
// }
// const outputAdd = add(num1, num2);

// function sub(num1, num2) {
//     return num1 - num2;
// }
// const outputSub = sub(num1, num2);

// function mul(num1, num2) {
//     return num1 * num2;
// }
// const outputMul = mul(num1, num2);

// function div(num1, num2) {
//     return num1 / num2;
// }
// const outputDiv = div(num1, num2);

// document.getElementById('add').innerHTML = `Additon is: ${outputAdd}`;
// document.getElementById('sub').innerHTML = `Subtraction is: ${outputSub}`;
// document.getElementById('mul').innerHTML = `Multiplication is: ${outputMul}`;
// document.getElementById('div').innerHTML = `Division is: ${outputDiv}`;



let firstName = "Emon";
let lastName = "Islam";

function localVariable( firstName, lastName ) {
    console.log( `Hello ${firstName} ${lastName}` );

    firstName = "Enamul";
}

localVariable( firstName, lastName );

console.log(firstName);


function defaultParameter1(firstName, lastName="Islam" ) {
    console.log( `Hello ${firstName} ${lastName}` );
}
defaultParameter1( "Emon" );

function defaultParameter2(firstName, lastName){
    if( lastName === undefined ){
        lastName = "Islam";
    }
    console.log( `Hello ${firstName} ${lastName}` );
}
defaultParameter2("Emon");

function defaultParameter4(firstName, lastName){
    lastName = lastName || "Islam";
    console.log( `Hello ${firstName} ${lastName}` );
}
defaultParameter4( "Emon", "Sana" );

function defaultParameter5( firstName, lastName = names()){
    console.log( `Hello ${firstName} ${lastName}` );
}

defaultParameter5( "Imrul")

function names(){
    return "Islam"
}

function defaultParamete54(num1, num2 = (5+6+5)){
    sum = num1 + num2;
    console.log(sum);
}
defaultParamete54(5)


/**
 * Member Registration
 */

function memberRegistration( meberName, memberId ){
    return checkMemberRegistration( meberName, memberId );
}

function checkMemberRegistration( meberName, memberId ){
    if( meberName === 'Emon' && memberId === '123456' ){
        return true;
    }
    return false;
}

if( memberRegistration( "Emon", "123456" ) ){
    console.log( "Login Successfully");
}else{
    console.log( "Invalid Name & Id");
}



function stackClosure(){
    let abcd = 10;
    return function( b ){
        return b * abcd;
    }
}
const result = stackClosure();
const finalResult = result(200)

// console.log( result );
console.dir( result );

// console.log( finalResult );
// console.dir( finalResult );

