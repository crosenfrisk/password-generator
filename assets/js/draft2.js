// PASSWORD GENERATOR //

// TODO / OPTIONAL: clean up generatePassword into seperate functions.

var getPasswordLength = function() {
   // Defining min and max length for password input.
   var minLength = 8;
   var maxLength = 128;

   // Create window prompting user to select password length given criteria.
   var passwordLength = window.prompt('Please choose password length (min. ' + minLength + ' and max. ' + maxLength +  ' characters):');
   // TODO / OPTIONAL: Transform password length to number. 

   // Errors for validation include: input being < 8 or > 128 characters.
   // TODO / OPTIONAL: input being NaN, input being null.
    if (passwordLength < minLength || passwordLength > maxLength) {
        // If min/max criteria are not met, user is redirected with alert("error") message and starts over.
        alert('Error! Please enter a number between ' + minLength + ' and ' + maxLength + '!');
    };

   return passwordLength;
}

var getCharacterSetInput = function() {
    // If the criteria for password length is met, user is prompted then to select at least one character set type.
    var characterSetInput = window.prompt('Please select one of the following character types for your password: uppercase, lowercase, numeric, special.');
    
    return characterSetInput;
}

var randomizeCharacters = function(characterSet, passwordLength) {
    // initialize passwordOutput
    var passwordOutput = '';

    for (var i = 0; i < passwordLength; i++) {
        // use method for generating a random whole number smaller than number of values in upperChar set.
        var randomNumber = Math.floor(Math.random() * characterSet.length);
            // use random number to pull character from each each character set.
            var randomLetter = characterSet[randomNumber];
                // append character to password output.
                passwordOutput += randomLetter;
                console.log(passwordOutput);
    }
    // Generated password will display on browser page either in window prompt or on screen.
    return passwordOutput;
}

var generatePassword = function() {
    
    var passwordLength = getPasswordLength();
    var characterSetInput = getCharacterSetInput();

    

    // Character set type is defined by input, either: uppercase, lowercase, special, or numeric. 
    var numChar = ['0','1','2','3','4','5','6','7','8','9'];
    var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialChar = ['"','`','~','!','@','#','$','%','^','&','*',',','_','-','+','=','<','>','.','?','/',':',';', '/','|','(',')','{','}'];
    var passwordOutput = '';
    // TODO / OPTIONAL: Add variable for all characters OR multiple character inputs.

    if (characterSetInput === 'uppercase'){
        // user will select okay or confirm.
        // use i < password to make sure number of iterations is appropriate for password length.
        alert('You have selected uppercase characters.');
        return passwordOutput = randomizeCharacters(upperChar, passwordLength);

    } else if (characterSetInput === 'lowercase'){
        alert('You have selected lowercase characters.');
        return passwordOutput = randomizeCharacters(lowerChar, passwordLength);

    } else if (characterSetInput === 'numeric'){
        alert('You have selected numeric characters.');
        return passwordOutput = randomizeCharacters(numChar, passwordLength);

    } else if (characterSetInput === 'special'){
        alert('You have selected special characters.');
        return passwordOutput = randomizeCharacters(specialChar, passwordLength);

    } else {
        // If character set type is not defined, user is given alert(error) message, and is prompted to select character type.
        alert('Invalid selection; please type: uppercase, lowercase, numeric, or special.');
    }
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