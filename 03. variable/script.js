/**
 * Assign and Redeclared
 */

var assign1 = 20;
    assign1 = 50;
console.log(assign1);

var assign2 = 30;
var assign2 = 50;
console.log(assign2);

let assign3 = 90;
    assign3 = 100;
console.log(assign3);

// let assign4 = 20;
// let assign4 = 50;
// console.log(assign4)

const assign5 = 20;
// assing5 = 30;


/**
 * Global Scope, Functional Scope, Block Scope
 */

var scopeVar1 = 10;  // Global Scope
function varFunc(){ // Functional Scope
    var scopeVar2 = 20;
    console.log(scopeVar1)
    console.log(scopeVar2);
}
varFunc();

// console.log(scopeVar2); Not Access

if(true){ // Block Scope
    var scopeVar3 = 30;
}
console.log(scopeVar3);

let scopeLet1 = 15 // Global Scope
function letFunc(){ // Functional Scope
    let scopeLet2 = 25;
    console.log(scopeLet1);
    console.log(scopeLet2);
}
letFunc();
// console.log(scopeLet2); Not Access

if(true){ // Block Scope
    let scopeLet3 = 25;
    console.log(scopeLet3);
}
// console.log(scopeLet3); Not Access

const scopeConst1 = 15 // Global Scope
function constFunc(){
    const scopeConst2  = 25;
    console.log(scopeConst1);
    console.log(scopeConst2);
}
constFunc();
// console.log(scopeLet2); Not Access

if(true){
    const scopeConst3 = 25;
    console.log(scopeConst3);
}
// console.log(scopeConst3); Not Access


let val1 = 10;
function firstFunc(){
    let val2 = 20;
    console.log(val1); // Access
    console.log(val2); // Access
    // console.log(val3); // Not Access
    function secondFunc(){
        let val3 = 30;

        console.log(val1); // Access
        console.log(val2); // Access
        console.log(val3); // Access
    }
    secondFunc();
}

firstFunc();