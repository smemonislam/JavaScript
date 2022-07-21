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



