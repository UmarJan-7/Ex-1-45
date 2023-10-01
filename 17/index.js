"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Exercise 16 : #####
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// Exercise 15:
let guests = [
    `ali`,
    `usman`,
    `asad`,
    `saif`
];
// Unavailable  guest name:
let guestunavailable = `saif`;
// console.log(`Mr. ${guestunavailable} is unavailable to join the dinner.`)
// replacing this guest with someone else
let Newguest = `akmal`;
let indexofguestunavailable = guests.indexOf(guestunavailable);
// console.log(indexofguestunavailable)
if (indexofguestunavailable !== -1) {
    guests[indexofguestunavailable] = Newguest;
}
// console.log(guests[3])
// Sending invitation again
// console.log(`Reinviting all guests`)
// guests.forEach((guests : string) => {
//     console.log(`Mr. ${guests}, this is a reinvitation message to request you all to join us at dinner`)
// done
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
guests.forEach((guests) => {
    //  console.log (`Hello everyone, we have found a better venue where we can invite more people, so the venue is changed, Mr. ${guests}`)
});
// • Add one new guest to the beginning of your array.
let newgueststart = `amjad `;
guests.unshift(newgueststart);
// console.log(guests)
//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
let newguestmid = `azeem`;
let indexmid = Math.floor(guests.length / 2);
guests.splice(indexmid, 0, newguestmid);
// console.log(guests)
//• Use append() to add one new guest to the end of your list.
let newguestend = `tahir`;
guests.push(newguestend);
// console.log(guests)
// • Print a new set of invitation messages, one for each person in your list.
// console.log(`New message to all of the guests`)
// for (let guest of guests) {
//     console.log(`Dear Mr. ${guest}, you are ivited to Pearl Continental Hotel for dinner on saturday night.`)
// }\
// done
// • Add a new line that prints a message saying that you can invite only two people for dinner.
for (let guest of guests) {
    console.log(`Dear Mr. ${guest}, Unfortunately due to some technical issues we are only able to entertain 2 guests this saturday `);
}
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    let removeguest = guests.pop();
    console.log(`Dear ${removeguest}, I am truly sorry! due to some technical issues we cannot invite you for now`);
}
//  • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guests) {
    console.log(`Dear Mr. ${guest}, you are still invited for dinner`);
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.pop();
guests.pop();
console.log(`Is there anyone still? : ${guests}`);
