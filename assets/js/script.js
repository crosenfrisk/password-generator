// variables to meet criteria for secure password
var numChar = ['0','1','2','3','4','5','6','7','8','9'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['"','`','~','!','@','#','$','%','^','&','*',',','_','-','+','=','<','>','.','?','/',':',';', '/','|','(',')','{','}'];

var allChar = numChar + upperChar + lowerChar + specialChar;

// var generatePassword = function {
//   //select length
//   //select type of character(s)
//   allChar.Math.random();
//   for (let i = 0; i > 8  && i < 128; i++)
//      password = str + i;
// }

// var minLength = allChar > 8;
// var maxLength = allChar < 128;
// var characterLength = (allChar == minLength && allChar == maxLength);

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var randPasswordArray = function(passwordLength){
  randPasswordArray[0] = numChar;
  randPasswordArray[1] = upperChar;
  randPasswordArray[2] = lowerChar;
  randPasswordArray[3] = specialChar;
  randPasswordArray = randPasswordArray(allChar, 4);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};
  
// user must select from criteria: length > 8 and < 128 characters; if criteria isn't met, window.alert("You must enter desired password length from 8 to 128 characters!")
// user must define paramaters: uppercase, lowercase, numeric, and special characters; must be at least one type.
// confirm selection (validation: at least 1 type is selected)
// display password in alert() or on page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
