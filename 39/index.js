"use strict";
/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
// Calling cityCountry for three different city-country pairs
const cityCountry1 = cityCountry('Lahore', 'Pakistan');
const cityCountry2 = cityCountry('Paris', 'France');
const cityCountry3 = cityCountry('New York', 'USA');
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
//   done
