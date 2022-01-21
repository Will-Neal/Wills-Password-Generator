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
  var passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-/";
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


