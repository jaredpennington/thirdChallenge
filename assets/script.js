var passwordLength;
var passwordString = "";
var passwordCharacters = "";

var random = function (number) {
  return Math.floor(Math.random() * number);
};

function getPassword() {
  passwordLength = prompt("Choose a number between 8 and 128 characters.");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("you need to provide a valid answer! Please try again.");
    console.log("No answer was given.");
  } else {
    getLowerCase();
  }
}

function getLowerCase() {
  var lowercase = confirm("do you want to use lowercase letters?");
  if (lowercase == true) {
    passwordCharacters = passwordCharacters + "abcdefghijklmnopqrstuvwxyz";
  }
  getUpperCase();
}

function getUpperCase() {
  var uppercase = confirm("Do you want to use Uppercase letters?");
  if (uppercase == true) {
    passwordCharacters = passwordCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  getNumbers();
}

function getNumbers() {
  var numbers = confirm("Do you want to use numbers?");
  if (numbers == true) {
    passwordCharacters = passwordCharacters + "1234567890";
  }
  getSpecial();
}

function getSpecial() {
  var special = confirm("Do you want to use special characters?");
  if (special == true) {
    passwordCharacters =
      passwordCharacters + " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  passwordFilter();
}

function generatePassword() {
  passwordString = "";
  getPassword();
  return passwordString;
}

function passwordFilter() {
  if (!passwordCharacters) {
    window.alert("You have to say Yes to one question!");
    getLowerCase();
  } else {
    var passwordArray = passwordCharacters.split("");
    while (passwordString.length < passwordLength) {
      var number = random(passwordArray.length);
      passwordString = passwordString + passwordArray[number];
      console.log(passwordString);
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordCharacters = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
