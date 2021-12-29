// PASSWORD GENERATOR //

var getPasswordLength = function() {
   // Defining min and max length for password input.
   var minLength = 8;
   var maxLength = 128;

   // Window prompts user to select password length with given criteria.
   var passwordLength = parseInt(window.prompt('Please choose password length (min. ' + minLength + ' and max. ' + maxLength +  ' characters):'));

   // If input is NaN, null, undefined, or a letter, user will be prompted to try again.
   if (!Number.isInteger(passwordLength)) {
    alert('Error! Please enter a number between ' + minLength + ' and ' + maxLength + '!');
    return getPasswordLength();
}

   // If input is an integer, it must be between 8 and 128 characters in length, if < 8 or > 128 characters, user will be prompted for correct length.
    if (passwordLength < minLength || passwordLength > maxLength) {
        // If min/max criteria are not met, user is redirected with alert("error") message and starts over.
        alert('Error! Please enter a number between ' + minLength + ' and ' + maxLength + '!');
        return getPasswordLength();
    };
   return passwordLength;
}

var randomizeCharacters = function(chosenChar, passwordLength) {
    // initialize passwordOutput
    var passwordOutput = '';

    for (var i = 0; i < passwordLength; i++) {
        // use method for generating a random whole number smaller than number of values in upperChar set.
        var randomNumber = Math.floor(Math.random() * chosenChar.length);
            // use random number to pull character from each each character set.
            var randomLetter = chosenChar[randomNumber];
                // append character to password output.
                passwordOutput += randomLetter;
                console.log(passwordOutput);
    }
    // Generated password will display on browser page either in window prompt or on screen.
    return passwordOutput;
}

var generatePassword = function() {
    
    var passwordLength = getPasswordLength();

    var characterTypeSpecial = window.confirm('Would you like to use special characters in your password?');
    var characterTypeUpper = window.confirm('Would you like to use uppercase characters in your password?');
    var characterTypeLower = window.confirm('Would you like to use lowercase characters in your password?');
    var characterTypeNumeric = window.confirm('Would you like to use numeric characters in your password?');

    // Character set type is defined by input, either: uppercase, lowercase, special, or numeric. 
    var numChar = ['0','1','2','3','4','5','6','7','8','9'];
    var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialChar = ['"','`','~','!','@','#','$','%','^','&','*',',','_','-','+','=','<','>','.','?','/',':',';', '/','|','(',')','{','}'];
    var chosenChar = [];

    var passwordOutput = '';

    if (characterTypeSpecial === true){
        chosenChar = chosenChar.concat(specialChar);
    } 

    if (characterTypeUpper === true){
        chosenChar = chosenChar.concat(upperChar);
    } 

    if (characterTypeLower === true){
        chosenChar = chosenChar.concat(lowerChar);
    } 

    if (characterTypeNumeric === true){
        chosenChar = chosenChar.concat(numChar);
    } 

    if (characterTypeSpecial === false && characterTypeUpper === false && characterTypeLower === false && characterTypeNumeric === false){
        alert("Error! You must select at least one character type");
        return generatePassword();
    };
    return passwordOutput = randomizeCharacters(chosenChar, passwordLength);
}

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