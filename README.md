# Password-Generator

## Table of Contents

* [Project Description](#Project-Description)

* [My Approach](#My-Approach)

* [Lessons Learned ](#Lessons-Learned) | [What I Enjoyed](#What-I-Enjoyed)

* [Code Improvement and Performance](#Code-Improvement-and-Performance) 

* [View the Project](#View-the-Project)

* [Installation](#Installation) | [Usage](#Usage) | [Credits](#Credits)

* [License](#License)


## PROJECT DESCRIPTION:

This repository (Password-Generator) was created for a bootcamp challenge project. The original source code came from: [coding-boot-camp/friendly-parakeet](https://github.com/coding-boot-camp/friendly-parakeet). 

I created a series of prompts guiding user input based on specific requirements (min/max length for password and selecting a character type). Using the selected criteria, as designated by the user, the written program displays the desired output: a randomized password.


## MY APPROACH:

I began by writing out the User Story and GIVEN, WHEN, THEN statements, which I used to guide my wireframing of the JavaScript. Wireframing helped me identify variable names and functions needed for proper application flow and functionality.

Using a white board also helped me anticipate places where user input error could occur, which helped me determine my `if() else {}` statements. 

After I had my wireframe, I wrote out `//comments` in my `draft2.js` file, between which I added my relevent code. I tested my code along the way to make sure that it functioned the way I indended. Whenever something didn't work in the console, I knew that I needed to address it.

Once all my comments were addressed, I knew I had completed the project as requested by the GIVEN, WHEN, THEN statements to satisfy the User Story.

Finally, I identifed opportunities for future development, which I labeled in comments as `TODO / OPTIONAL`, which I may revisit over time. I copied and pasted all my code from draft2.js into `script.js` and then changed the reference in `index.html` to reflect the redirect to `script.js`. I decided to keep the `startercode.js` as a reference point, but I could remove it and `draft2.js` to clean up the root directory.

After writing the README.md and adding and committing everything from the develop branch one final time, I did a `git merge develop` on the main branch, I then pushed upstream to GitHub to `origin main` which results in the final project you are reading now.


## LESSONS LEARNED:

I learned that not all numbers typed in JavaScript are read as numeric input, and sometimes a `console.log(typeOf)` will help determine what we are actually receiving from user input. 

In the beginning when I was developing the `getPasswordLength` function I was given an error because the input entered was interpreted as a string and not a numeric value. To fix the error, I realized that I needed to take my numbers out of quotation marks. Upon reflection it seems silly that they were in quotation marks, but when I created my variables for character set type (`var numChar`, `var upperChar`, `var lowerChar`, `var specialChar`) all of which I chose to write as arrays, the items in which I typed in quotation marks, making them all strings!

## WHAT I ENJOYED:

I enjoyed the refactoring process. I took the initial code from 116 lines down to 99. My biggest refactor was the `if (characterSetInput...)` section where the `else if() {}` statments were a little redundant. By identifying common parts within the code, I created new variables, `var passwordLength`  and `var characterSetInput` to use within the `generatePassword()` function, eliminating the need for completely spelled out for and if statements. You can view the original code under commit: [commit 2bf9a2ea4396597a9e542630a66efd59c8e9e8dc](https://github.com/crosenfrisk/password-generator/commit/2bf9a2ea4396597a9e542630a66efd59c8e9e8dc). 

*   *I could still refactor the code down further, but I feel like as it is now it is much more readable and it works, so I don't want to mess with it!*
  

## CODE IMPROVEMENT AND PERFORMANCE:

Code refactoring clearly makes for better readability, but it also plays a role in effective and efficient updates. Should a change to input requirements be necessary, having values such as `minLength` and `maxLength` declared in the global scope will make updating the project criteria and references to it throughout the application quick and simple (without having to run a `Ctrl + F` or `Ctrl + H` to search or replace.


## VIEW THE PROJECT:


**Password Generator** in Browser <img src="./assets/images/PasswordGeneratorMockup.png">

Viewable site [GitHub Pages Deployment](https://crosenfrisk.github.io/password-generator/).


## INSTALLATION:

Visit [@crosenfrisk on GitHub](https://github.com/crosenfrisk/password-generator) to download the project 'password-generator' to your local device. Using the `<CODE CLONE>` button on GitHub, copy the SSH or HTTPS key and then use the command line prompt within **Git Bash $**  `git clone  git@github.com:crosenfrisk/password-generator.git`  [and hit enter], this should save the file locally to your device.


## USAGE:

After downloading the project from GitHub to your local device, open the `password-generator` repository in a code editor such as Visual Studio Code, then view `index.html` in your web browser or Live Server.


## CREDITS:
[stackoverflow](https://stackoverflow.com/questions/1497481/javascript-password-generator) contribution written by user [Gumbo](https://stackoverflow.com/users/53114/gumbo) in September 2009.

[codegrepper](https://www.codegrepper.com/code-examples/javascript/function+that+create+a+password+with+the+length+of+the+parameter+in+javascript) JavaScript mockup written by [Itchy Iguana](https://www.codegrepper.com/profile/iamsosassy) in January 2020.

[How to set a minimum length](https://stackoverflow.com/questions/21172991/how-to-set-min-and-max-character-length-in-a-textbox-using-javascript) guidance from [rboling](https://stackoverflow.com/users/2509279/rboling) January 2014 on stackoverflow.

[Example of validation and if statement for number input] (http://jsfiddle.net/nZ37J/)

Referenced JavaScript from in-class projects such as Taskinator, and Robot Gladiators.


## LICENSE:

##### *This is free and unencumbered software released into the public domain.*

##### *Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.*


##### *In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.*


##### *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*


##### *For more information, please refer to <https://unlicense.org>*