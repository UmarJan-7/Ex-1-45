/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

const usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'John'];

for (const username of usernames) {
  if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// By using toLowerCase(), we ensure that the comparison is consistent, regardless of how the username is typed (e.g., 'Admin', 'admin', 'ADMIN').

// However, if you want the comparison to be case-sensitive and distinct between different cases, you can skip using toLowerCase() and directly compare the username as is. It depends on the requirements of your application.

// done