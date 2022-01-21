# Will's Password Generator

## Description
Will's Password Generator is a web based password generator that creates a random password based on the user defined criteria. It is a straight forward application with an exceedingly simple UI that consists of the title, a button to instantiate the password generation and a window to display the generated password. 

## Background
In the modern technological world, digital security is critical and the first line of defense for any individual is their passwords. Unfortunately, humans are predictable and their memories are imperfect so the average user tends to gravitate towards passwords that are short and predictable. This leaves them vulnerable to readily available brute force password cracking algorithms. The solution is to generate passwords that are long, complex and unpredictable. Will's Password Generator achieves this by looping through a string of various types of characters then using random number generation to select characters from this string and create the password. It also sets a minimum length so that users cannot generate something so short that all combinations could easily be run through by another computer. 

## Functionality

Despite the simplicity of the UI, this password generator does have some more complex functionality that sets it apart from the most rudimentary password generators. The user is able to choose whether or not to include four different categories of characters - lowercase, uppercase, numeric and special. The user is also able to choose the desired length of their password from 8 to 128 characters. If they choose any number less than 8 or greater than 128 they will be alerted that they have made an invalid selection and prompted to generate again. Similarly, if they choose to include no categories of characters they will be prompted that they must select at least one category. 

## Deployed Application 

[Click for deployed application](https://will-neal.github.io/Wills-Password-Generator/)

## Screenshots 
<br>

![Password Generator Landing Page](https://github.com/Will-Neal/Wills-Password-Generator/blob/main/images/landingPage.jpg?raw=true)

![Password Generator Prompt Example](https://github.com/Will-Neal/Wills-Password-Generator/blob/main/images/prompt.jpg?raw=true)

![Password Generator Password](https://github.com/Will-Neal/Wills-Password-Generator/blob/main/images/generatedPassword.jpg?raw=true)