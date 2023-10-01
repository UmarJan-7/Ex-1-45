"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let scent = {
    name: `blue current`,
    price: 1000,
    about: `blue current is a hard scent `
};
let scents = [];
scents.push({
    name: `musk`,
    price: 2000,
    about: `musk is scent all the way extracted from fresh musk`
});
scents.push(scent);
scents.push({
    name: `dusk`,
    price: 1350,
    about: `It is a dusky and dull type of scent`
});
scents.push({
    name: `Rollercoaster`,
    price: 1700,
    about: `scent that takes your mind on a rollercoaster ride`
});
scents.push({
    name: `binging`,
    price: 2250,
    about: `a scent that is aromatic and stingy`
});
// console.log(scents)
// function to display
function displayscents(scents) {
    for (let i of scents) {
        console.log(`
        Title : ${i.name}
        Price : ${i.price}
        Details : ${i.about}
        _________________________________________________\n`);
    }
}
displayscents(scents);
// done
