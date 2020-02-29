// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let w = prompt('Please enter a number between 12 and 128 to generate the length of your password')
  if (w >= 8 && w <= 128) {
    alert(w)
  }
  else alert('I need that number to between 12 and 128, try agian.')

  length = w
  lower = 'abcdefghijklmnopqrstuvwxyz'
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  number = '0123456789'
  sym = '!@#$%^&*()'
  pass = "";
  let upperC = confirm('do you want upper characters?')
  let lowerC = confirm('Do you want lower characters?')
  let numberC = confirm('do you want numbers?')
  let symbolC = confirm('do you want symbols?')
  if (upperC && lowerC && numberC && symbolC) {
    for (i = 0; i < length / 4; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + number.charAt(Math.floor(Math.random() * number.length)) + symbol.charAt(Math.floor(Math.random() * symbol.length))
    }
    return pass
  } else if (lowerC && upperC && symbolC) {
    for (i = 0; i < length / 3; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + symbol.charAt(Math.floor(Math.random() * symbol.length))
    }
    return pass
  } else if (upperC && symbolC && numberC) {
    for (i = 0; i < length / 3; i++) {
      pass += upper.charAt(Math.floor(Math.random() * upper.length)) + symbol.charAt(Math.floor(Math.random() * symbol.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (lowerC && symbolC && numberC) {
    for (i = 0; i < length / 3; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + symbol.charAt(Math.floor(Math.random() * symbol.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (lowerC && upperC && numberC) {
    for (i = 0; i < length / 3; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (upperC && symbolC) {
    for (i = 0; i < length / 2; i++) {
      pass += upper.charAt(Math.floor(Math.random() * upper.length)) + symbol.charAt(Math.floor(Math.random() * symbol.length))
    }
    return pass
  } else if (symbolC && numberC) {
    for (i = 0; i < length / 2; i++) {
      pass += symbol.charAt(Math.floor(Math.random() * symbol.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (lowerC && numberC) {
    for (i = 0; i < length / 2; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (lowerC && upperC) {
    for (i = 0; i < length / 2; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length))
    }
    return pass
  } else if (upperC) {
    for (i = 0; i < length; i++) {
      pass += upper.charAt(Math.floor(Math.random() * upper.length))
    }
    return pass
  } else if (lowerC) {
    for (i = 0; i < length; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length))
    }
    return pass
  } else if (symbolC) {
    for (i = 0; i < length; i++) {
      pass += symbol.charAt(Math.floor(Math.random() * symbol.length))
    }
    return pass
  } else if (numberC) {
    for (i = 0; i < length; i++) {
      number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  }

}

password()
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);