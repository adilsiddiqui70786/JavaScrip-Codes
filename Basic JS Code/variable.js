// There is three types Variables which we can create -

console.log("Hello JS");
console.log("Swagat karo Hamara");

// 1 . let Keyword: Declaration & Initialisation of variables
let sugarPrice = 50;
let saltPrice = 20;

//Printing the message using template literals

console.log(`The total price is : ${saltPrice+sugarPrice} Rupees.`);



console.log(" ");   // for new line


// 2. Const Keyword: Declaration & Initialisation of variables

const pi = 3.14159;
const daysInWeek = 7;
const appName = "Face Detection";

// Reassign the variable with const keyword wil cause error coz they can't changed.
// pi = 3.14  // Error

// Printing the constants using commas
console.log("The value of pi is", pi);
console.log("There are", daysInWeek, "days in a week");
console.log("Welcome to", appName);

console.log(" ");   // for new line



// 3. Var Keyword: Creating and Declaration of variables using

var name;
var age;
var city;

// initialization -

name = "Mayank Singh";
age = "20";
city = "Allahabad";

//Printing the message
console.log(name + " age is " + age + " and he lives in " + city);
