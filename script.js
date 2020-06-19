// Assignment Code
var generateBtn = document.querySelector("#generate");

var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var stringLower = "abcdefghijklmnopqrstuvwxyz"
var stringNum ="0123456789"
var stringSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

function getLower (){
  var randomIndex = Math.floor(Math.random() * stringLower.length)
  console.log(stringLower [randomIndex])
  return stringLower[randomIndex]
}
// console.log(getLower) to test

function getUpper (){
  var randomIndex = Math.floor(Math.random() * stringUpper.length)
  console.log(stringUpper [randomIndex])
  return stringUpper[randomIndex]

}
// console.log(getUpper) to test

function getNum (){
  var randomIndex = Math.floor(Math.random() * stringNum.length)
  console.log(stringNum [randomIndex])
  return stringNum[randomIndex]

}
// console.log(getNum) to test
 
function getSpecial (){
  var randomIndex = Math.floor(Math.random() * stringSpecial.length)
  console.log(stringSpecial [randomIndex])
  return stringSpecial[randomIndex]

}
// console.log(getSpecial) to test



function generatePassword (){
  var promptLength = Number (prompt ("Password Length between 8-128 characters"));
  while (isNaN(promptLength) || promptLength < 8 || promptLength > 128) promptLength = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
  // this adds a condition that password length must be between numbers 8 and 128.  The isNaN() function determines whether a value is an illegal number

  var confirmUpper = confirm ("Would you like to use uppercase letters?");
  var confirmLower = confirm ("Would you like to use lowercase letters?");
  var confirmNum  = confirm ("Would you like to use numbers?");
  var confirmSpecial = confirm ("Would you like to use special characters?");

  while (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecial) {
    alert("You must select at least one character type!");
    confirmUpper = confirm("Would you like to use uppercase letters?");
    confirmLower = confirm("Would you like to use lowercase letters?");
    confirmNum = confirm("Would you like to use numbers?");
    confirmSpecial = confirm("Would you like to use special characters?");
}

  var result = ""
  var options = ""


  if (confirmUpper === true) {
    options=options.concat(stringUpper)
  }
  if (confirmLower === true){
    options=options.concat(stringLower)
  }
  if (confirmNum === true){
    options=options.concat(stringNum)
  }
  if (confirmSpecial === true){
    options=options.concat(stringSpecial)
  }
  for(i=0; i<promptLength; i++){
    var randomIndex = Math.floor(Math.random() * options.length)
    result=result.concat(options [randomIndex])
  }

return result
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
// console.log("check")
var button = document.createElement("button");
var cardFooter = document.getElementsByClassName("card-footer")[0];
cardFooter.appendChild(button);

button.innerHTML="Copy Password";

function copyPassword(){
  document.getElementById("password").select();
  document.execCommand("Copy");

  alert("Password copied to clipboard!");
}

button.addEventListener("click", copyPassword);

