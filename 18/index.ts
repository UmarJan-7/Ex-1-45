/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


// Stating............

// • Store the locations in a array. Make sure the array is not in alphabetical order.

let places:string[]= [`Lisbon`, `Tokyo`, `Rio`, `Helsinki`, `Nairobi`]

// • Print your array in its original order.
console.log(`Original order : ${places}`)

// • Print your array in alphabetical order without modifying the actual list.
console.log( `Alphabetical order : `)
console.log( [...places].sort())

// • Show that your array is still in its original order by printing it.
console.log(`Still in original order : ${places}`)

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log( `Reverse alphabetical order : `)
console.log([...places].sort().reverse())

// • Show that your array is still in its original order by printing it again.
console.log(`Still in original order : ${places}`)

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reverse original order : `)
places.reverse()
console.log(places)


// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Reverse again original order : `)
places.reverse()
console.log(places)

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Array stored in alphabetical order`)
places.sort()
console.log(places)

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log(`Array in reverse alphabetical order`)
places.reverse()
console.log(places)

// done
