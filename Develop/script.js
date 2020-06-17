// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var promptLength = prompt ("Password Length between 8-128 characters");
var confirmUpper = confirm ("Do you want CAPITALS included?");
var confirmLower = confirm ("Do you want lowercase letters?");
var confirmNum  = confirm ("Do you want to use numbers 0-9?");
var confirmSpecial = confirm ("Do you want to use special characters");

function getLower (){

}

function getUpper (){

}

function getNum (){

}
 
function getSpecial (){
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
