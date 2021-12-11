// PASSWORD GENERATOR //

var generatePassword = function() {
    // Create window prompting user to select password length given criteria.
    var passwordLength = window.prompt('Please choose password length (min. 8, max. 128 characters):');
    // To Do / Optional: Transform password length to number.
    // Defining min and max length for password input.
    var minLength = 8;
    var maxLength = 128;

    // Errors for validation include: input being < 8 or > 128 characters.
    // To Do / Optional: input being NaN, input being null.
    if (passwordLength < minLength || passwordLength > maxLength) {
        // If min/max criteria are not met, user is redirected with alert("error") message and starts over.
        alert('Error! Please enter a number between 8 and 128!');
    };

    // If the criteria for password length is met, user is prompted then to select at least one character set type.
    var characterSetInput = window.prompt('Please select one of the following character types for your password: uppercase, lowercase, numeric, special.');

    // Character set type is defined by input, either: uppercase, lowercase, special, or numeric. 
    var numChar = ['0','1','2','3','4','5','6','7','8','9'];
    var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialChar = ['"','`','~','!','@','#','$','%','^','&','*',',','_','-','+','=','<','>','.','?','/',':',';', '/','|','(',')','{','}'];

    if (characterSetInput === 'uppercase'){
        alert('You have selected uppercase characters.');

    } else if (characterSetInput === 'lowercase'){
        alert('You have selected lowercase characters.');

    } else if (characterSetInput === 'numeric'){
        alert('You have selected numeric characters.');

    } else if (characterSetInput === 'special'){
        alert('You have selected special characters.');
    } else {
        // If character set type is not defined, user is given alert(error) message, and is prompted to select character type.
        alert('Invalid selection; please type: uppercase, lowercase, numeric, or special.');
    }

    // To Do: Once character type is selected, the program generates a password using password length and character type to randomize password.

    
}





// To Do: Generated password will display on browser page either in window prompt or on screen.




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