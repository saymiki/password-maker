// Assignment Code
var generateBtn = document.querySelector("#generate");

var enterLimit = "";
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
  return lowercase[Math.floor(Math.random() * lowercase.length)];
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
  return uppercase[Math.floor(Math.random() * uppercase.length)];
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
  return symbol[Math.floor(Math.random() * symbol.length)];
};

const randomNumber = () => {
  numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return num[Math.floor(Math.random() * num.length)];
};

// creating a function to set parameters for password
function generatePassword() {
  // how many characters 8-128
  var setLimit = parseFloat(
    prompt("How many characters between 8-128 would you like to use?")
  );
  // If they press the cancel button
  if (!setLimit) {
    alert("This needs a value!");
    var setLimit = parseFloat(
      prompt("How many characters would you like your password to contain?")
    );
  }

  // If they choose outside the limit.
  if (setLimit < 8 || setLimit > 128) {
    var enterLimit = parseFloat(prompt("You must choose between 8 and 128."));
  }
  // If they choose inside the limit.
  if (setLimit < 8 || setLimit > 128) {
    var setLimit;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
