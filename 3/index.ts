//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = `rana Muhammad Umar jan`

let lowercase : string = personName.toLowerCase()

console.log(lowercase)

let uppercase : string = personName.toUpperCase()

console.log(uppercase)

let words : string[] = personName.split(` `)
let titlecase : string = ``

for ( let i = 0 ; i < words.length; i++){

    titlecase +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+` `
}
console.log(titlecase);

