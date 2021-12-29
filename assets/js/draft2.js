// PASSWORD GENERATOR //

// TODO / OPTIONAL: separate getPasswordLength and getCharacterSetInput from validation into separate functions.

var getPasswordLength = function() {
   // Defining min and max length for password input.
   var minLength = 8;
   var maxLength = 128;

   // Create window prompting user to select password length given criteria. Transform password length to number. 
   var passwordLength = parseInt(window.prompt('Please choose password length (min. ' + minLength + ' and max. ' + maxLength +  ' characters):'));

   if (!Number.isInteger(passwordLength)) {
    alert('Error! Please enter a number between ' + minLength + ' and ' + maxLength + '!');
    return getPasswordLength();
}

   // Errors for validation include: input being < 8 or > 128 characters.
   // TODO / OPTIONAL: input being NaN, input being null, undefined, or a letter.
    if (passwordLength < minLength || passwordLength > maxLength) {
        // If min/max criteria are not met, user is redirected with alert("error") message and starts over.
        alert('Error! Please enter a number between ' + minLength + ' and ' + maxLength + '!');
        return getPasswordLength();
    };
   return passwordLength;
}

var getCharacterSetInput = function() {
    // define possible values for character type input
    var characterTypeUpper = 'uppercase';
    var characterTypeLower = 'lowercase';
    var characterTypeNumeric = 'numeric';
    var characterTypeSpecial = 'special';
    var characterTypes = characterTypeUpper + characterTypeLower + characterTypeNumeric + characterTypeSpecial;

    // If the criteria for password length is met, user is prompted then to select at least one character set type.

    // HOW DO I GET THIS FUNCTION TO WORK?
    var characterSetInput = function() {
    // var characterSetInput = window.prompt('Please select one of the following character types for your password: uppercase, lowercase, numeric, special.');
    }
    
    // If character type is not properly selected, user is redirected with alert("error") message and starts over with getCharacterSetInput().
    if (characterSetInput === null || characterSetInput === undefined || characterSetInput === characterTypes || characterSetInput != characterSetInput){
        alert('Error! Please select a valid character type: uppercase, lowercase, numeric, or special.');
        getCharacterSetInput();
    };

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
    // var characterSetInput = getCharacterSetInput();   
    console.log(passwordLength);

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

    if (chosenChar === false) {
        alert("Error! You must select at least one character type");
        generatePassword();
    }

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