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
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon", "Geronimo"];

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
console.log(itCompanies,"lista kompanija");

function findMiddle(arrayLength){
   if(arrayLength % 2 === 0){
    return arrayLength / 2 - 1;
   }else{
    return arrayLength / 2;
   }
}
let middleSlice = itCompanies.slice(findMiddle(itCompanies.length), itCompanies.length/2 + 1)
console.log(middleSlice, "Slice out the middle IT company or companies from the array")

// Remove the first IT company from the array
//console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
itCompanies.forEach((company,index)=>{
    if(middleSlice.includes(company)){
        let temp = itCompanies[itCompanies.length - 1];
        itCompanies[itCompanies.length - 1] = itCompanies[index];
        itCompanies[index] = temp;
        itCompanies.pop();
    }
})
console.log(itCompanies, "lista kompanija nakon micanja srednjih elemenata");

// Remove the last IT company from the array
itCompanies.pop();

// Remove all IT companies
let removedItCompanies = itCompanies;
removedItCompanies = [];
console.log(removedItCompanies,"prazna lista kompanija");

//Create a separate countries.js file and store the countries array into this file,
//create a separate file web_techs.js and store the webTechs array into this file. 
//Access both file in main.js file
const countries = require('./countries');
console.log(countries);
const webTechs = require('./webTechs');
console.log(webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/,|\./gi,"");
const words = text.split(" ");
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
function amIAlergic(alergent){
    if(alergent === 'Honey'){
        return true;
    }
    return false;
}

function doFollowing(shopingCart){
    if(!shopingCart.includes('Milk')){
        shopingCart.unshift('Milk');
    }
    if(!shopingCart.includes('Sugar')){
        shopingCart.push('Sugar');
    }
    if(amIAlergic('Honey')){
        temp = shopingCart.indexOf('Honey');
        shopingCart[temp] = shopingCart[shopingCart.length - 1];
        shopingCart.pop();
    }
    shopingCart[shopingCart.indexOf('Tea')] = 'Green Tea'; 
}

doFollowing(shoppingCart);
console.log(shoppingCart,"after doing");

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list
countries.includes('Ethiopia') ? console.log("ETHIOPIA") : countries.push("Ethiopia");
console.log(countries);

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
//If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')){
    console.log('Sass is a Css preprocess');
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//The following is an array of 10 students ages: 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  

//-Sort the array and find the min and max age 
//ages.sort(); //ugrađena funkcija
function mySort(array){
    for(let i=1; i < array.length; i++){
        for(let j = 0; j < array.length -1; j++){
            if(array[j] > array[i]){
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array
}
console.log(mySort(ages));
console.log(mySort(ages)[0],"min");
console.log(mySort(ages)[ages.length - 1],"max");

//- Find the median age(one middle item or two middle items divided by two) 
const sortedAges = mySort(ages);
let medianAge = sortedAges.slice(findMiddle(sortedAges.length), sortedAges.length/2 + 1);
medianAge = medianAge.length === 1 ? medianAge[0] : (medianAge[0] + medianAge[1]) / 2
console.log(medianAge,"median age");

//- Find the average age(all items divided by number of items)
let sum = 0;
for(let i=0; i<ages.length;i++){
    sum += ages[i];
}
const avg = sum /ages.length;
console.log(avg);
//- Find the range of the ages(max minus min)
const range = sortedAges[sortedAges.length - 1] - sortedAges[0];
console.log(range);
//- Compare the value of (min - average) and (max - average), use abs() method


