// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.

// • Print a new set of invitation messages, one for each person in your list.

// Exercise 15:
let guests : Array<string> = [
    `ali`,
    `usman`,
    `asad`,
    `saif`
]

// Unavailable  guest name:

let guestunavailable : string = `saif`
// console.log(`Mr. ${guestunavailable} is unavailable to join the dinner.`)

// replacing this guest with someone else

let Newguest : string = `akmal`
let indexofguestunavailable : number = guests.indexOf(guestunavailable)
// console.log(indexofguestunavailable)

if(indexofguestunavailable !== -1) 
{
    guests[indexofguestunavailable]= Newguest
}
// console.log(guests[3])

// Sending invitation again
// console.log(`Reinviting all guests`)
// guests.forEach((guests : string) => {
//     console.log(`Mr. ${guests}, this is a reinvitation message to request you all to join us at dinner`)



// done

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

guests.forEach((guests:string) =>
{
//  console.log (`Hello everyone, we have found a better venue where we can invite more people, so the venue is changed, Mr. ${guests}`)

})

// • Add one new guest to the beginning of your array.

let newgueststart: string = `amjad `
guests.unshift(newgueststart)
// console.log(guests)

//  Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

let newguestmid : string = `azeem`
let indexmid : number = Math.floor(guests.length/2)
guests.splice(indexmid, 0, newguestmid)
// console.log(guests)

//• Use append() to add one new guest to the end of your list.
let newguestend : string = `tahir` 
guests.push(newguestend)
// console.log(guests)

// • Print a new set of invitation messages, one for each person in your list.
console.log(`New message to all of the guests`)
for (let guest of guests) {
    console.log(`Dear Mr. ${guest}, you are ivited to Pearl Continental Hotel for dinner on saturday night.`)
}
// done