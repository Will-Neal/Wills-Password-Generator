// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that generates the password
//simple version only based on length
// function generatePassword() {
//   userPassword = ""
//   var passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-/";
//   var passwordLength = prompt("How many characters do you want?");
//   if (passwordLength < 8) {
//     alert("Password cannotbe less than 8 characters")
//     generatePassword()
//   } else if (passwordLength > 128){
//     alert("Password cannot be more than 128 characters")
//   } else {
//       for (i=0; i < passwordLength; i++) {
//         userPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
//       }
//       return userPassword
//       writePassword()
//       console.log(userPassword)
//   }

//function to generate password based on more user choices

function generatePassword() {
  userPassword = ""
  //Empty string to be added to depeneding on user choices
  var passwordCharacters = "";
  //variabes for the different user options
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var specialCharacters = "!@#$%^&*()-+/" 
  //asking the user to confirm which characters they want to include
  var lowerConfirm = confirm("Do you want to include lowercase letters?")
  if (lowerConfirm) {
    passwordCharacters += lowerCase
  } else {
    passwordCharacters = passwordCharacters
  }

  var upperConfirm = confirm("Do you want to include uppercase letters?")
  if (upperConfirm) {
    passwordCharacters += upperCase
  } else {
    passwordCharacters = passwordCharacters
  } 

  var numberConfirm = confirm("Do you want to include numeric characters?")
  if (numberConfirm) {
    passwordCharacters += numbers
  } else {
    passwordCharacters = passwordCharacters
  }

  var specialConfirm = confirm("Do you want to include special characters?")
  if (specialConfirm) {
    passwordCharacters += specialCharacters
  } else {
    passwordCharacters = passwordCharacters
  }


  var passwordLength = prompt("How many characters do you want?");
  if (passwordLength < 8) {
    alert("Password cannotbe less than 8 characters")
    generatePassword()
  } else if (passwordLength > 128){
    alert("Password cannot be more than 128 characters")
  } else {
      for (i=0; i < passwordLength; i++) {
        userPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
      }
      return userPassword
      writePassword()
      console.log(userPassword)
  }

}
