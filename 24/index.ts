/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/



// Tests for equality and inequality with strings
let string1 = 'hello';
let string2 = 'world';

console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 === 'hello');

console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);

// Tests using the lower case function
let uppercaseString = 'HELLO';
let lowercaseString = 'hello';

console.log("Is uppercaseString in lowercase? I predict False.");
console.log(uppercaseString.toLowerCase() === lowercaseString);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 15;
let num2 = 20;

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);

console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);

// Tests using "and" and "or" operators
let trueValue = true;
let falseValue = false;

console.log("Is trueValue true and falseValue false? I predict True.");
console.log(trueValue && !falseValue);

console.log("Is trueValue true or falseValue true? I predict True.");
console.log(trueValue || falseValue);

// Test whether an item is in an array
let numbers = [1, 2, 3, 4, 5];

console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in the numbers array? I predict True.");
console.log(!numbers.includes(6));
