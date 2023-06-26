// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating characters to choose to create password from
const lowercase = [
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

const uppercase = [
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

const special = [
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

const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// creating a function to set parameters for password
function generatePassword() {
  var setLimit;
  do {
    setLimit = parseInt(
      prompt("How many characters between 8-128 would you like to use?")
    );
  } while (isNaN(setLimit) || setLimit < 8 || setLimit > 128);

  var confirmSpecial = confirm("Would you like to use a special character?");

  var confirmNumeric = confirm("Would you like to use a number?");
  var confirmLowercase = confirm(
    "Would you like to use a lowercase character?"
  );
  var confirmUppercase = confirm(
    "Would you like to use an uppercase character?"
  );

  var parameters = [];

  // If Special is chosen.
  if (confirmSpecial) {
    console.log("log special: ", special);
    parameters = parameters.concat(special);
  }
  // If Numeric is chosen.
  if (confirmNumeric) {
    parameters = parameters.concat(numeric);
  }
  // If Lowercase is chosen.
  if (confirmLowercase) {
    parameters = parameters.concat(lowercase);
  }
  // If Uppercase is chosen.
  if (confirmUppercase) {
    parameters = parameters.concat(uppercase);
  }

  var newPassword = "";

  console.log("logging params", parameters);

  for (var i = 0; i < setLimit; i++) {
    newPassword =
      newPassword + parameters[Math.floor(Math.random() * parameters.length)];
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("password: ", password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
