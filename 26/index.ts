/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

// Version 1 : runs `if` block

let alien_color = 'green';

if (alien_color === 'green') {
  console.log('Player earned 5 points for shooting the alien!');
} else {
  console.log('Player earned 10 points!');
}

// Version 2 : runs `else` block

let alien_color2 = 'red';

if (alien_color2 === 'green') {
  console.log('Player earned 5 points for shooting the alien!');
} else {
  console.log('Player earned 10 points!');
}

// done

