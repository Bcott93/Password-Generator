// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
// Function to prompt user for password options
function getPasswordOptions(pass) {
// Sets my userinput to an Array
let userInput = []          
// Sets my invalid variable to a string
let invalid = ""           
// Allows me to call the prompts multiple times in different loops
let prompts = 
["Choose a password length between 10-64", 
 "Would you like to include lowercase letters? Please answer Yes or No", 
 "Would you like to include uppercase letters? Please answer Yes or No", 
 "Would you like to include numeric characters? Please answer Yes or No", 
 "Would you like to include special characters? Please answer Yes or No"]

// Ensures the user gives us a number within the range specified. Will ask them to re-enter a false input. 
 for (let i = 0; i < 1; i++) {
   userInput[0] = prompt(prompts[0])   
   if (userInput[0] >= 10 && userInput[0] <= 64) {
   break
   } else {
   invalid = "Please try again and choose a number between 10 and 64"
   alert(invalid)
   // restarts loop if they enter an incorrect input. 
   return getPasswordOptions(pass) 
 }
}

// Ensures the user gives us a yes or no answer to the queries from various prompts. 
 for (let i = 1; i < prompts.length; i++) {
   userInput[i] = prompt(prompts[i])
   if (userInput[i].toLowerCase() === "yes" || userInput[i].toLowerCase() === "no") {
   } else {
   invalid = "Please try again and answer Yes or No"
   alert(invalid)
   // If the data is incorrect, it will go back one stage in the loop. 
   i--      
   }
  }
 return userInput
}
      
// Function for getting a random element from an array
 function getRandom(arr) {
   const randomIndex = Math.floor(Math.random() * arr.length)
   const randomEl = arr[randomIndex]
   return randomEl
  }
  
// Function to generate password with user input
 function generatePassword(userInput) {
   // Sets my password variable to a string
   let password = ""
   // Sets characters variable to an array
   let characters = []
   // Defines userInput within the function
   userInput = getPasswordOptions()
   // The below if statements will consider the user choices to create a new array of acceptable characters.  
   if (userInput[1].toLowerCase() === "yes") {
     characters = characters.concat(lowerCasedCharacters)
   }
   if (userInput[2].toLowerCase() === "yes") {
     characters = characters.concat(upperCasedCharacters)
   }
    if (userInput[3].toLowerCase() === "yes") {
     characters = characters.concat(numericCharacters)
   }      
    if (userInput[4].toLowerCase() === "yes") {
     characters = characters.concat(specialCharacters)
   }

// This loop runs through the newly created character array for the user specified password length and adds to password variable.
 for (let i = 0; i < userInput[0]; i++) {
   let pw = getRandom(characters)  
   password += pw             
  } 
   alert("Your new password is: " + password)
  return password 
  }

  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);