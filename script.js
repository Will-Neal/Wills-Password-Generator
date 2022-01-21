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

//function to generate password based on more user choices

function generatePassword() {
  userPassword = ""
  //Empty string to be added to depeneding on user choices
  var passwordCharacters = "";
  //variabes for the different user options
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" 
  //asking the user to confirm which characters they want to include
  var lowerConfirm = confirm("Include lowercase letters?")
  if (lowerConfirm) {
    passwordCharacters += lowerCase
  } else {
    passwordCharacters = passwordCharacters
  }

  var upperConfirm = confirm("Include uppercase letters?")
  if (upperConfirm) {
    passwordCharacters += upperCase
  } else {
    passwordCharacters = passwordCharacters
  } 

  var numberConfirm = confirm("Include numeric characters?")
  if (numberConfirm) {
    passwordCharacters += numbers
  } else {
    passwordCharacters = passwordCharacters
  }

  var specialConfirm = confirm("Include special characters?")
  if (specialConfirm) {
    passwordCharacters += specialCharacters
  } else {
    passwordCharacters = passwordCharacters
  }

  //Conditional to make sure that at least one option is selected
  if (passwordCharacters.length > 1) {
    var passwordLength = prompt("How many characters do you want?");
    if (passwordLength < 8) {
      alert("Password cannot be less than 8 characters")
      return "Invalid criteria, generate again"
    } else if (passwordLength > 128){
      alert("Password cannot be more than 128 characters")
      return "Invalid criteria, generate again"
    } else {
        for (i=0; i < passwordLength; i++) {
          userPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length))
        }
        return userPassword
    }
  } else {
    alert("You must include at least one type of character");
    return "Invalid criteria, generate again";
  }
}
