const companies = [
{name: "Company One", category: "Finance", start: 1981, end: 2003}, 
{name: "Company Two", category: "Retail", start: 1992, end: 2008}, 
{name: "Company Three", category: "Auto", start: 1999, end: 2007}, 
{name: "Company Four", category: "Retail", start: 1989, end: 2010}, 
{name: "Company Five", category: "Technology", start: 2009, end: 2014}, 
{name: "Company Six", category: "Finance", start: 1987, end: 2010}, 
{name: "Company Seven", category: "Auto", start: 1986, end: 1996}, 
{name: "Company Eight", category: "Technology", start: 2011, end: 2016}, 
{name: "Company Nine", category: "Retail", start: 1981, end: 1989}, 
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*
------------------------------------------------forEach---------------------------------------

for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

companies.forEach(function(company){    // function (Iterator)
    console.log(company.name, company.start);
});
*/




/* 
------------------------------------------------Filter Get 21 or older--------------------------

let canDrink = [];
for (let i = 0; i < ages.length; i++){
    if (ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
const canDrink = ages.filter(function(age){
    if (age >= 21){
        return true;
    }
   
});
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);


//_________________________________Filter the retail company
const retailCompanies = companies.filter(function(company){
    if (company.category === "Retail"){
        return true;
    }
});
const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

// ___________________________________Get 80s companies
const eightysCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1990);
console.log(eightysCompanies);

//_____________________________________Companies that lasted more than 10 years
const tenOrMore = companies.filter(company => company.end - company.start >= 10);
console.log(tenOrMore);
*/




/*
//-----------------------------------------------Map---------------------------------------
______________________________________________Create Array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

const companyNames = companies.map(function(company){
    return  `${company.name} [ ${company.start} - ${company.end} ]`;
});
const testMap = companies.map(  company => `${company.name} [ ${company.start} - 
    ${company.end} ]`);
console.log(testMap);


__________________________Numbers Squared Times Two
const ageMap = ages
    .map(age => Math.sqrt(age)) //First we take the square root
    .map(age => age * 2);       //Then Multiply it by 2

console.log(ageMap);
*/



/*
//--------------------------------------------Sort---------------------------------------
//_________________________________Sort company to newest to latest

const sortedCompanies = companies.sort (function(c1, c2){
    if (c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1) );
console.log(sortedCompanies);
//_________________________________Sort Ages array 


const sortedAges = ages.sort((a, b) => b - a);
console.log(sortedAges);
*/



/*
---------------------------------------------reduce--------------------------------------------
let ageSum = 0;
for (let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}

const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0 );
console.log(ageSum);

_________________________________Sum Every start company


const totalYears = companies.reduce(function(total, company){
    return total + (company.end - company.start); 
}, 0);


const totalYears = companies.reduce((total, company) => total + 
    (company.end - company.start),0);

console.log(totalYears);
*/

/*
-----------------------------------------Combine Methods---------------------------------------
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a - b)
    .reduce((total, age) => total + age,0);
console.log(combined);
*/
