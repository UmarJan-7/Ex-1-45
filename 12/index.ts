// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//EXERCISE 11 was :
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

/*let myFriends : string[] = [`Dani`, `Saadi`, `Haider`, `Shazib`, `Hassan`]

console.log(myFriends[0])
console.log(myFriends[1])
console.log(myFriends[2])
console.log(myFriends[3])
console.log(myFriends[4])

console.log(`My Friends are`, (myFriends))*/

// done

let myFriends : string[] = [`Dani`, `Saadi`, `Haider`, `Shazib`, `Hassan`]
//adding loop in array
for (let name of myFriends ) {
//adding message for each
console.log(`Greetings dear ${name}, Hope you are fine and doing weell. Best of luck for your exams`)

}
// done