// Assignment Code
var generateBtn = document.querySelector("#generate");

var setLimit = "";
var confirmLowercase;
var confirmUppercase;
var confirmSpecial;
var confirmNumeric;

// creating characters to choose to create password from
const randomLowercase = () => {
  lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
};

const randomUppercase = () => {
  uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
};

const randomSpecial = () => {
  special = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
};

const randomNumber = () => {
  numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
};

// creating a function to set parameters for password
function generatePassword() {
  // how many characters 8-128
  var setLimit = parseFloat(
    prompt("How many characters between 8-128 would you like to use?")
  );
  console.log(setLimit);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
