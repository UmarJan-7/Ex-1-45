"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
showMagicians(magicianNames);
//   done
