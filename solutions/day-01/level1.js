
//Declare an empty array
const array = [];

//Declare an array with more than 5 number of elements
const array5 = new Array(6);
//Find the length of your array
console.log(array.length);
console.log(array5.length);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [{key:"kljuc", value:"vrijednost"}, [1,2,3],1 ,"string", "string 2",null];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon", "Geronimo", "ž"];

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
const middleIndex = itCompanies.length % 2 === 0 && itCompanies.length >= 1 ? itCompanies.length / 2 : (itCompanies.length + 1) / 2
console.log(itCompanies[0],itCompanies[middleIndex],itCompanies[itCompanies.length - 1]);

// Print out each company
itCompanies.forEach((company) => console.log(company));

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((company)=> console.log(company.toUpperCase()));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join() + " are big IT companies"); // 1
console.log(itCompanies.toString().concat(" are big IT companies")); //2

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes("Facebook") ? console.log(itCompanies[itCompanies.indexOf("Facebook")]) : console.log("not found");

// Filter out companies which have more than one 'o' without the filter method
let oFullCompanies = [];
itCompanies.forEach(company => {
    if(company.split('o').length > 2){
        oFullCompanies.push(company);
    }
});
console.log(oFullCompanies);

// Sort the array using sort() method
const sortedItCompaines = itCompanies.sort();
console.log(sortedItCompaines);

// Reverse the array using reverse() method
reverseOrder = sortedItCompaines.reverse();
console.log(reverseOrder);

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3,undefined));

// Slice out the middle IT company or companies from the array
let middleSlice = itCompanies.slice((itCompanies.length -1) / 2, itCompanies.length/2 + 1)
console.log(middleSlice)
// Remove the first IT company from the array
//console.log(itCompanies.pop());
// Remove the middle IT company or companies from the array

console.log(middleSplice);
// Remove the last IT company from the array
// Remove all IT companies

//Create a separate countries.js file and store the countries array into this file, 
//create a separate file web_techs.js and store the webTechs array into this file. 
//Access both file in main.js file