// Assignment Code
var generateBtn = document.querySelector("#generate");
var form = document.getElementById("passwordGen");
var charAmt = document.getElementById("numOfChars");
var uppercaseAmt = document.getElementById("uppercaseOpt");
var includeNum = document.getElementById("numberOpt");
var includeSymbols = document.getElementById("symbolsOpt");

//arrays to be looped for pw gen
var allLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var allUppercase = allLowercase.toUpperCase();
var allNum = [0,1,2,3,4,5,6,8,9];
var allSymbols = ['!','@','#','$','%','&','*','~','/'];

// Write password to the #password input
function writePassword() {
  e.preventDefault();
  //is character amount entered
  var charAmtCheck = charAmt.value;
  //is uppercase checked
  var uppercaseCheck = uppercaseAmt.value;
  //is include number checked
  var numberCheck = includeNum.value;
  //is symbols option checked
  var symbolsCheck = includeSymbols.value;

  var password = generatePassword(charAmtCheck, uppercaseCheck, numberCheck, symbolsCheck);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(charAmtCheck, uppercaseCheck, numberCheck, symbolsCheck) {
var allChars = allLowercase;
if (uppercaseCheck) { 
  allChars.concat(allUppercase)
};
if (numberCheck) {
  allChars.concat(allNum);
};
if (symbolsCheck) {
  allChars.concat(allSymbols);
}

var pwChar = [];
for (var i = 0; i < charAmt; i++) {
  var character = allChars[Math.floor(Math.random() * charAmt)];
  pwChar.push(character);
}
return pwChar;
}

// function arrayMinMax(min, max) {
//   for (var i = min; i <= max; i++) {
//     array.push([i];
//   }
//   return array;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
