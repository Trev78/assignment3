// Assignment Code //

let generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ]
  var symoblsChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '`', '~', '<', '>', '/', '?', ':', ';']


  while (ture) {

    let selectPasswordLength =
      confirm("Please select a password length btween 12 to 128 characters long.")

    let useUppercaseChar =
      confirm("Would you like your password to include upper case letters?")

    let useLowerCaseChar =
      confirm("Would you like your password to include lower case letters?")

    let useNumbersChar =
      confirm("Would you like your password to include numbers?")

    let useSymbolsChar =
      confirm("Would you like your password to include symbols?")

  }
  if ("none selected")
    alert("Invalid choice made. Please try agian.") {
      break
    }
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);