// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var promptLength = prompt ("Password Length between 8-128 characters");
var confirmUpper = confirm ("Do you want CAPITALS included?");
var confirmLower = confirm ("Do you want lowercase letters?");
var confirmNum  = confirm ("Do you want to use numbers 0-9?");
var confirmSpecial = confirm ("Do you want to use special characters");

// console.log(promptLength);
// console.log(confirmUpper);
// console.log(confirmUpper);
// console.log(confirmNum);
// console.log(confirmSpecial);

var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var stringLower = "abcdefghijklmnopqrstuvwxyz"
var stringNum ="0123456789"
var stringSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var length = Number(promptLength)

function getLower (){
  var randomIndex = Math.floor(Math.random() * stringLower.length)
  console.log(stringLower [randomIndex])
  return stringLower[randomIndex]
}
getLower();

function getUpper (){
  var randomIndex = Math.floor(Math.random() * stringUpper.length)
  console.log(stringUpper [randomIndex])
  return stringUpper[randomIndex]

}
getUpper();

function getNum (){
  var randomIndex = Math.floor(Math.random() * stringNum.length)
  console.log(stringNum [randomIndex])
  return stringNum[randomIndex]

}
getNum();
 
function getSpecial (){
  var randomIndex = Math.floor(Math.random() * stringSpecial.length)
  console.log(stringSpecial [randomIndex])
  return stringSpecial[randomIndex]

}
// if (confirmUpper === true) {
//   options=options.concat(stringUpper)
// }
// if (confirmLower === true){
//   options=options.concat(stringLower)
// }
// console.log(options)
// for(i=0; i<length; i++){
//   var randomIndex = Math.floor(Math.random() * options.length)
//   result=result.concat(options [randomIndex])
// }

function generatePassword (){
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
  for(i=0; i<length; i++){
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
