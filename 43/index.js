"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


*/
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push(magician + ' the Great');
    }
    return modifiedMagicians;
}
const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
const modifiedMagicians = makeGreat([...magicianNames]); // Create a copy and modify the copy
showMagicians(magicianNames); // Display original magician names
showMagicians(modifiedMagicians); // Display modified magician names
//    done
