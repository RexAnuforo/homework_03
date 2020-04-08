var charList="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&*+,-./:;<=>?@\\^_"
    var temp=''

// i had  some trouble using the math.floor and math random
    function generatepass(charLength){
      temp=''
      for (i=0; i < charLength; i++)
      temp+=charList.charAt(Math.floor(Math.random()*charList.length))
      return temp
    }
    function populateform(enterlength){
      document.passwordGenerator.output.value = generatepass(enterlength)
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
