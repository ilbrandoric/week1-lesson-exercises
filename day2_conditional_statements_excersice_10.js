
/*

Your task is to convert the previous code example "The Website Language" into a switch statement.
To check your code, try changing the value of the variable country to "Mexico", "France", "Brazil", or any country name.

*/

let language;
const country = "Spain"; // "Mexico", "France", "Brazil"


// Convert the following into a switch statement:
if (country === "Spain" || country === "Mexico") {
  language = "es";
}
else if (country === "France") {
  language = "fr";
}
else if (country === "Brazil") {
  language = "pt";
}
else {
  language = "en";
}

// Check your code:
console.log(`https://mywebsite.com/${language}`);
