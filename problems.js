//Session 1
//Ex 1
/*
function reverseAString(str){
    let newArr = [];
           str
           .split('')
           .forEach((element,i) => { 
              newArr[str.length-i] = element;
           });
           
           return newArr.join('');
}
const output = reverseAString('i love javascript');
*/


//Ex 2 - Palindrome
/* 
function palindrome(str){
    let a = true;
    const newStr = str.split(' ').join('').toLowerCase().split('');
    newStr.forEach((element,it) => {
        if(element != newStr[newStr.length-it-1]){
            a = false;
        }
        
    });
    console.log(a);
}
palindrome('Anita lava la tina');
*/

//Ex 3 - Reverse a Int
/*
function reverseInt(val){
    val = val.toString();
    return parseInt(val.split('').sort().join(''));
}
const output = reverseInt(-987654321);
*/


//Ex 4 - Capitalice first letter of every word in a string
/*
function capitalice(str){
    const strArr = str.toLowerCase().split(' ');
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');
      

}const output = capitalice('i love javascript');
*/

/*
//Ex 5 - return most common char in a str
function mostCommon(str){
   let newArr = str.split(' ').join('').split('');
   console.log(newArr.sort());
}
mostCommon('i love javascript');
*/

// ---------------------------------------------------------Session #2------------------------------------------------------------------------

//Ex 1: return longest word of a string

arr = [1,2,3,4,5];
arr = arr.reverse();

console.log(arr);


