/*
* 1) Create a variable referencing div#log. In addition to using console.log()
* you will also write the results of this program to the DOM
*/
var first = document.getElementById("log");
console.log(first);

/**
* 2) Create a variable for your name, then log in to the console 
*	AND to the #log div (in a new paragraph). USE THE VARIABLE YOU CREATED ABOVE
* TO REFERENCE THE DIV. Required format: "Hello, my name is {name}."
*/
var name = "Melvin";
console.log(name);
var para2 = document.createElement("p");
var txt2 = "Hello, my name is " + name;
para2.innerHTML = txt2;

first.appendChild(para2);

/**
*	3) Create a variable referring to p#lede above.
* 4) Change the CSS class of p#lede to make it stand out in some way.
* You will obviously need to create the corresponding CSS. Once you do that,
* log (both to the console AND to the div#log in a new paragraph): "I just changed
* the class of p#lede."
*/
var second = document.getElementById("lede");
second.className = "red";
console.log("I just changed the class of p#lede");
var para = document.createElement("p");
var txt = "I just changed the class of p#lede";
para.innerHTML = txt;

first.appendChild(para);



/**
* 5) Create two more variables for the number 50 and the number 25.
* 6) Creat a variable for the product of these two variables.
*	7) Log the product of the two vars, 
* in the following format: "{num1} times {num2} equals {product}."
*/

var firstNum = 50;
var secondNum = 25;

var solution = firstNum * secondNum;
console.log(solution);


/**
* 8) Create a variable for the SUM of the two numbers. Log it in the same format as
* above.
*/var sum = firstNum + secondNum;
console.log(sum);

/** 
* 9) Log an h3 to the div#log (don't need to console.log() this one). It should
* say "Age Calculation Below!"
*/
var headerThree = document.createElement("h3");
var txtThree = "Age Calculation Below";
headerThree.innerHTML = txtThree;

first.appendChild(headerThree);

/**
* 10) Create two more variables: one for the current year, 
* another for your birth year. Log them both in the appropate format:"The current 
* year is {currentyear}. My birth year is {birthyear}" **/

var currYear = 2016;
var birthYear = 1996;
console.log("year is " + currYear + ". My birth year is " + birthYear);

var p3 = document.createElement("p");
var txtFour = "year is " + currYear + ". My birth year is " + birthYear;
p3.innerHTML = txtFour;
first.appendChild(p3);

/** 11) Create a variable for the difference between the current year and your birth
* year. Log that variable: "The difference between {currentyear} and {birthyear} is 
* {difference}."**/

var diff = currYear - birthYear;
console.log("The difference between " + currYear + " and " + birthYear + " is " +diff );

var p4 = document.createElement("p");
var txtFive = "The difference between " + currYear + " and " + birthYear + " is " +diff;
p4.innerHTML = txtFive;
first.appendChild(p4);


/* 12) Based on this calcuation, you could be one of two ages. Use math to create 
* another variable for your OTHER possible age. Log it like this. "I could be 
* {difference} or {otherage} years old."
*/ 
var other = 19;
console.log("I could be " + diff + " or " + diff - 1 + " years old");

var p5 = document.createElement("p");
var txtSix = "I could be " + diff + " or " + other + " years old";
p5.innerHTML = txtSix;
first.appendChild(p5);

/**

* 13) Finally, based on the Module 3 readings, tell me the ways in which
* functions would have made this exercise easier. Log it.
**/ 

console.log("We could have written functions for everything we copied and pasted instead only switching out the variables. Especially creating a new paragraph each time.")