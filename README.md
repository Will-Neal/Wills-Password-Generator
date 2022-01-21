# Will's Password Generator

## Description
Will's Password Generator is a web based password generator that creates a random password based on the user defined criteria. It is a straight forward application with an exceedingly simple UI that consists of the title, a button to instantiate the password generation and a window to display the generated password. 

## Functionality

Despite the simplicity of the UI, this password generator does have some more complex functionality that sets it apart from the most rudimentary password generators. The user is able to choose whether or not to include four different categories of characters - lowercase, uppercase, numeric and special. The user is also able to choose the desired length of their password from 8 to 128 characters. If they choose any number less than 8 or greater than 128 they will be alerted that they have made an invalid selection and the function will refire. Similarly, if they choose to include no categories of characters they will be prompted that they must select at least one category. However, in this case the function will not automatically be refired and instead text will be displayed in the password display telling them to generate again. This is because it is possible that they are repeatedly selecting cancel because they dont want to generate a password and this will break the loop, only calling the function again if they choose to by clicking the generate password button. 

## Deployed Application 

[Click for deployed application](https://will-neal.github.io/Wills-Password-Generator/)

## Screenshots 
<br>

![Password Generator Landing Page](https://github.com/Will-Neal/Wills-Password-Generator/blob/main/images/landingPage.jpg?raw=true)

![Password Generator Prompt Example](https://github.com/Will-Neal/Wills-Password-Generator/blob/main/images/prompt.jpg?raw=true)

![Password Generator Password](https://github.com/Will-Neal/Wills-Password-Generator/blob/main/images/generatedPassword.jpg?raw=true)