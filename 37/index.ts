/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


*/

function makeShirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}`);
    console.log(`Message: ${message}`);
  }
  
  // Creating a large shirt with the default message
  makeShirt();
  
  // Creating a medium shirt with the default message
  makeShirt('medium');
  
  // Creating a small shirt with a custom message
  makeShirt('small', 'This is a custom message!');
  