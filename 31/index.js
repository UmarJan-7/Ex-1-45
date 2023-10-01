"use strict";
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// Array with some initial usernames
let usernames = ['admin', 'Eric', 'Alice', 'Bob', 'John'];
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// done
// Remove all usernames
usernames.splice(0, usernames.length);
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
