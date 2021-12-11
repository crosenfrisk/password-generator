// Assignment code here
var numChar = ['0','1','2','3','4','5','6','7','8','9'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['"','`','~','!','@','#','$','%','^','&','*',',','_','-','+','=','<','>','.','?','/',':',';', '/','|','(',')','{','}'];

var allChar = numChar + upperChar + lowerChar + specialChar;

// create an array
// var randPasswordArray = function(passwordLength){
//     randPasswordArray[0] = numChar;
//     randPasswordArray[1] = upperChar;
//     randPasswordArray[2] = lowerChar;
//     randPasswordArray[3] = specialChar;
//     randPasswordArray = randPasswordArray(allChar, 4);
//   };

// user is asked for initial input, please select password length.
var generatePassword = function() {
    var input = window.prompt("Please select a password length from 8 to 128 characters.");


    var passwordLength = parseInt(input);


        if (passwordLength <= 7) {
            alert('Your password must be 8 or more characters. Please try again.');
        } else if (passwordLength >= 129) {
            alert('You need to select a number less than 129 characters long.');
        } else {
            //success
            selectType();
        }
    };

// user is asked for secondary input, "please select character type." User must select at least one character type for the generator to work.
var selectType = function() {
    var input = window.prompt('Please select at least one type of character for your password to generate. Please type: uppercase, lowercase, special, numeric, or all');

    if (upperChar) {
        password = upperChar.Math.random()*password.length;
    } else if (lowerChar) {
        password = lowerChar.Math.random()*password.length;
    } else if (specialChar) {
        password = specialChar.Math.random()*password.length;
    } else if (numChar) {
        password = numChar.Math.random()*password.length;
    } else if (allChar) {
        password = allChar.Math.random()*password.length;
    } else {
        window.alert('You need to select from the following: uppercase, lowercase, special, numeric, or all.')
    }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);