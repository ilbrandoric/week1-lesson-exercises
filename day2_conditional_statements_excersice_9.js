
/*

To start, open a new pen on CodePen and copy/paste the below starter code.

Your task is to convert the previous code example "Elevator Switchboard" into a switch statement.
To check your code, try changing the value of the variable department to "clothes", "electronics", "gardening", or any other string.

*/

let floor;
const department = "shoes"; // "clothes", "electronics", "bookstore", "gardening"


// Convert the following into a switch statement:
if (department === "shoes" || department === "clothes") {
  floor = "1st Floor";
}
else if (department === "electronics") {
  floor = "2nd Floor";
}
else if (department === "gardening") {
  floor = "3rd Floor";
}
else {
  floor = "Ground Floor";
}

console.log(`Going to the ${department} department - ${floor}.`)
