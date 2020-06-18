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

  var confirmUpper = confirm ("Do you want CAPITALS included?");
  var confirmLower = confirm ("Do you want lowercase letters?");
  var confirmNum  = confirm ("Do you want to use numbers 0-9?");
  var confirmSpecial = confirm ("Do you want to use special characters");

  // while (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecial) {
  //   alert("You must select at least one character type!");
  //   confirmUpper = confirm("Would you like to use uppercase letters?");
  //   confirmLower = confirm("Would you like to use lowercase letters?");
  //   confirmNum = confirm("Would you like to use numbers?");
  //   confirmSpecial = confirm("Would you like to use special characters?");


  
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

// if (promptLength < 8) {
//   alert ("password must be at least 8 characters long.")
//   else {
//     writePassword()
//   }
// }


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// clipboard.addEventListener('click', () => {
// 	const textarea = document.createElement('textarea');
// 	const password = resultEl.innerText;
	
// 	if(!password) { return; }
	
// 	textarea.value = password;
// 	document.body.appendChild(textarea);
// 	textarea.select();
// 	document.execCommand('copy');
// 	textarea.remove();
// 	alert('Password copied to clipboard');
// });

// function copyPassword(){

//   document.getElementById("display").select();

//   document.execCommand("Copy");

//   alert("Password copied to clipboard!");

// }$('#form-password').on('change', function(){
//   pass = $('#form-password').val();
//   if(pass.length < 6){
//       $('#passwordmsg').html('Password must be at least 6 characters');
//   }else {
//       $('#passwordmsg').html("");
  
//   });
