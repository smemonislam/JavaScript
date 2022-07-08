/**
 * Writing into an HTML element, using innerHTML.
 */
let output1 = document.getElementById('demo1');
function innerH(){
    output1.innerHTML = "Change the html element.";    
}

/**
    document.getElementById('demo1').innerHTML = "Change the html element.";
 */

/**
 * Writing into an alert box, using window.alert().
 */
function alertF(){
    alert("Hello World!");
}

/**
 * Writing into the HTML output using document.write().
 */

function writeF(){
    document.write(5 + 6);
}

/**
 * Writing into the browser console, using console.log().
 */
let value = document.getElementById('demo2');
console.log(value);


