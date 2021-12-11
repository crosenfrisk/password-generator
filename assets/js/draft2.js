// PASSWORD GENERATOR //

// To Do: Create window prompting user to select password length.
// To Do: Transform password length to number.
// To Do: Validate user input to meet criteria for min and max length.
// To Do: Errors for validation include: input being < 8 or > 128 characters, input being NaN, input being null.
// To Do: If any of these criteria are not met, user is redirected with alert("error") message and starts over.
// To Do: If the criteria for password length is met, user is prompted then to select at least one character set type.
// To Do: Character set type is defined by input, either uppercase, lowercase, special, or numeric.
// To Do: If character set type is not defined, user is given alert(error) message, and is prompted to select character type.
// To Do: Once character type is selected, the program generates a password using password length and character type to randomize password.
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