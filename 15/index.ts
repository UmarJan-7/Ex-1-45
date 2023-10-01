// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Ex 14 was :
/*// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guests : Array<string> = [
    `ali`,
    `usman`,
    `asad`,
    `saif`
]

// using for each loop

guests.forEach((guests) =>
{
    console.log(`Dear Mr. ${guests}, You're invited to dinner at my place on 30 of feb 2024. So please join us and your presence will be honor for us.
    `
    )
}
)

/*done*/

// Guest who can not come

let guests : Array<string> = [
    `ali`,
    `usman`,
    `asad`,
    `saif`
]

// Unavailable  guest name:

let guestunavailable : string = `saif`
console.log(`Mr. ${guestunavailable} is unavailable to join the dinner.`)

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
console.log(`Reinviting all guests`)
guests.forEach((guests : string) => {
    console.log(`Mr. ${guests}, this is a reinvitation message to request you all to join us at dinner`)


})
// done

export{guests}