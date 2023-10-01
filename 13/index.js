"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportFav = [];
transportFav.push([`motorcycle`, `2023`, `Honda`]);
transportFav.push([`car`, `2012`, `Honda civic`]);
transportFav.push([`cycle`, `2015`, `Sohrab`]);
// Checking strings are added
console.log(transportFav);
//back to code
// using `for each` loop to print series of statements
transportFav.forEach(([transport, model, company]) => { console.log(` I would like to buy ${company} ${transport} ${model}.`); });
// done
