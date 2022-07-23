// "use strict";
// /***
//  * this Keyword in JavaScript
//  * 
//  * i. implicit Binding
//  * ii. explicit Binding
//  * iii. new Binding
//  * iv. window Binding
//  */

// /***********************************/
// /**
//  * implict binding
//  */
 
// const sakib = {
//     name: 'Sakib',
//     age: 35,
//     printName: function(){
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
// let answer = sakib.printName();
// console.log( answer );


// const printPlayerName = function( obj ){
//     obj.printPlayer = function(){
//         return `${this.name} is ${this.type}.`
//     }
// }
// const sakibPlayer = {
//     name: "Sakib",
//     age: 35,
//     type: 'All Rounder',
// }

// const tamimPlayer = {
//     name: "Tamim",
//     age: 34,
//     type: 'Let Hand Batsman',
// }
// printPlayerName( sakibPlayer );
// printPlayerName( tamimPlayer );

// console.log( sakibPlayer.printPlayer() );
// console.log( tamimPlayer.printPlayer() );


// const Person = {
//     name: 'Sakib',
//     age: 35,
//     printName: function(){
//         return `${this.name} is ${this.age} years old.`;
//     },
//     father: {
//         name: 'Mr. X',
//         age: 50,
//         printName: function(){
//             return `${this.name} is ${this.age} years old.`;
//         }
//     }
// }

// console.log( Person.printName() );
// console.log( Person.father.printName() );


// /***********************************/
// /**
//  * exmplict binding
//  */

// const sakibPlayerFunc = function( v1, v2, v3 ){
//     return `${this.name} is ${v1} ${v2} ${v3}.`;
// }
// const v1 = "Handsome";
// const v2 = "All Rounder";
// const v3 = "Best Player";
// // call()
// console.log( sakibPlayerFunc.call( sakib, v1, v2, v3 ) );

// // apply()
// const v = [v1, v2, v3 ];
// console.log( sakibPlayerFunc.apply(sakib, v ) );

// // bind()
// const player = sakibPlayerFunc.bind( sakib, v1, v2, v3 );
// console.log( player() );


// /**
//  * window binding
//  */

// // function helloThis() {
// //     console.log( this === window ) // window object
// // }
// // helloThis()



// const JavaScript = {
//     name: 'JavaScript',
//     libraries: ['React', "jQuery", "Angular", 'Vue'],
//     printLibraries: function(){
//         this.libraries.forEach( (element) => {console.log( `${this.name} library element` )} );
//     }
// }
// JavaScript.printLibraries();


// // let formField = document.querySelector( '.inputField' );
// // let showResult = document.querySelector( '.result' );
// // let showResultThanks = document.querySelector( '.thanks' );

// // function show(){
// //     showResult.innerHTML = this.value;
// //     setTimeout( () => {
// //         showResultThanks.innerHTML = `You have typed ${this.value}`;
// //     }, 1000 );
// // }
// // formField.addEventListener( "keyup", show )


// const obj = {
//     carName: 'Volvo',
//     color: 'White',
//     start: function(){
//         console.log( this.carName + " " + this.color );
//         // var self = this;
//         // function innerThis(){
//         //     console.log( self.carName + " " + self.color );
//         // }
//         // innerThis()
//         return  () => {
//             console.log( this.carName + " " + this.color );
//         }
//     }
// }
// obj.start()()

// function outerFunc(){
//     let a = 10;
//     return function(){
//         return a + 20;
//     }
// }
// console.dir( outerFunc() )


// const masrafi = {
//     name: 'Masrafi Bin Mortaza',
//     age: 39,
//     printName: function(){
//         return `${this.name} is ${this.age} years old.`;
//     }
// }

// console.log( masrafi.printName() );

// const razzak = {
//     name: 'Abdur Razzak',
//     age: 36,
// }
// const rubel = {
//     name: 'Rubel Hossain',
//     age: 33,
// }
// const bestBowler = function( obj ){
//     obj.playerName = function(){
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
// bestBowler( razzak );
// bestBowler( rubel );
// console.log( razzak.playerName() );
// console.log( rubel.playerName() );

// const cricket = {
//     team: "Bangladesh",
//     captain: "Sakib Al Hasan",
//     player: function(){
//         return `${this.captain} is the best player in ${this.team}.`;
//     },
//     bestPlayer: {
//         player1: "Tamim Iqbal",
//         team: "Bangladesh",
//         palyer: function(){
//             return `${this.player1} is the best player in ${this.team}.`;
//         }
//     }
// }
// console.log(cricket.player() );
// console.log( cricket.bestPlayer.palyer() );


// const oldPlayer = {
//     name: "Asraful Islam",
//     age: 38,
// }

// const myFunc = function (){
//     const innerThis = () => {
//         console.log( `${this.name} is ${this.age} years old.` )
//     }
//     innerThis()
//     return `${this.name} is ${this.age} years old.`;

// }
// console.log( myFunc.call( oldPlayer ) )


// // const searchInput = document.querySelector( '.inputField' );
// // const showResult = document.querySelector( '.result' );
// // const showThanks = document.querySelector( '.thanks' );

// // searchInput.addEventListener( 'keyup', function(){
// //     showResult.innerHTML = this.value;
// //     setTimeout( () => {
// //         showThanks.innerHTML = `You have typed: ${this.value}`;
// //     }, 3000 );
// // } );

// const obj = { a: 'Custom' };
// var a = 'Global';

// function whatsThis() {
//   return this.a;  // The value of this is dependent on how the function is called
// }

// console.log( whatsThis() );
// console.log( whatsThis.call( obj ) );
// console.log( whatsThis.apply( obj ) );


// function f() {
//   return this.a;
// }

// const g = f.bind({ a: 'azerty' });
// console.log(g()); // azerty

const obj = {
    bar() {
      const x = ( () => this);
      return x;
    }
  };
  
  // Call bar as a method of obj, setting its this to obj
  // Assign a reference to the returned function to fn
  const fn = obj.bar();
  console.log( typeof fn )
  console.log( typeof obj )

  console.log( fn() === obj );
  
