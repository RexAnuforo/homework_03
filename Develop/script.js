var charactersLength = prompt("How many characters do you want your password to be (please answer in whole numbers greater the 8 and less the 128)");

var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

if(charactersLength >= 8 && charactersLength <= 128){
  var upperCase = confirm("would you like upper case characters in your password")
  var lowerCase = confirm("would you like lower case characters in your password")
  var numberCase = confirm("would you like numbers characters in your password")
  var specialCase= confirm("would you like Special characters in your password")
}
else{
   alert("please answer first question correctly")
  }


if(upperCase===true){
  
}
else{
  alert("Please pick one of the previous options")
}




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// fuction getPasswordOptions() {
//   var passwordLength = parseInt(prompt ("how many characters would you like you password to be?"));

//   if(passwordLength<8 || passwordLength > 128){
//     alert("password must be between 8 to 128 characters");
//   }
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// getPasswordOptions();
