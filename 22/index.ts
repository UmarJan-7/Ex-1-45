// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let array1 : number[] = [ 1, 2, 3, 4]

// Intentional error: accessing an index out of bounds
let indexerror = 10;
let element = array1[indexerror]

console.log(`Element at index`, indexerror, `is`, element)

// making corrention

let indexcorrection = 2

let element2 = array1[indexcorrection]

console.log(`Element at index`, indexcorrection, `is`, element2)

// done
