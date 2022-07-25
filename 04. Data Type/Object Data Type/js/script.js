/**
 * JavaScript Objects
 */

"use strict";

const car = {
    carName: 'Fiat',
    model: 500,
    weight: '850kg',
    color: 'White',
    start: function(){
        return 'The car is start now.';
    },
    drive: function(){
        return 'The car is drive now.';
    }
}

console.log( car['carName'] );
console.log( car['model'] );
console.log( car['weight'] );
console.log( car['color'] );
console.log( car.start() );
console.log( car.drive() );

const person = {
    firstName: 'John',
    lastName: 'Doe',
    height: '5.5',
    age: 50,
    eyeColor: 'blue',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log( person.firstName );
console.log( person.lastName );
console.log( person.height );
console.log( person.age );
console.log( person.eyeColor );
console.log( person.fullName() );



const newPerson = {
    name: 'Abdullah Al Mahmud',
    age: 23,
}

// insert
newPerson.country = "Bangladesh";
console.log( newPerson );

// Change 
newPerson.name = "Afsana Khatun Keya";
console.log( newPerson );

// Delete
delete newPerson.age;
console.log( newPerson );

// JavaScript for...in Loop

for( let key in car ){
    // console.log( key );  // Output key 
    console.log( car[key] );
}

// Nested Objects
/****************/
// const myObj = {
//     name:"John",
//     age:30,
//     cars: {
//       car1:"Ford",
//       car2:"BMW",
//       car3:"Fiat"
//     }
// }

// for( let key in myObj.cars ){
//     console.log( myObj.cars[key] )
// }

// Nested Arrays and Objects
/***************************/

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}
let x = '';
for( let key in myObj.cars ){
    x += "<h1>" + myObj.cars[key].name + "</h1>";
    // console.log(  myObj.cars[key].name  );
    for( let keys in  myObj.cars[key].models){
        x += myObj.cars[key].models[ keys ] + "<br>";
        // console.log(myObj.cars[key].models[ keys ] )
    }
}
// document.getElementById('demo').innerHTML = x;