// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let w = prompt('Please select a number between 12 and 128.')
  if (w >= 12 || w <= 128) {
    alert(w)

  } else alert('try again, I need that number between 12 and 128.')

  length = w
  lower = 'abcdefghijklmnopqrstuvwxyz'
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  number = '0123456789'
  sym = '!@#$%^&*()'
  pass = "";
  let upperC = confirm('do you want upper characters?')
  let lowerC = confirm('Do you want lower characters?')
  let numberC = confirm('do you want numbers?')
  let symC = confirm('do you want symbols?')
  if (upperC && lowerC && numberC && symC) {
    for (i = 0; i < length / 4; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + number.charAt(Math.floor(Math.random() * number.length)) + sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  } else if (lowerC && upperC && symC) {
    for (i = 0; i < length / 3; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  } else if (upperC && symC && numberC) {
    for (i = 0; i < length / 3; i++) {
      pass += upper.charAt(Math.floor(Math.random() * upper.length)) + sym.charAt(Math.floor(Math.random() * sym.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (lowerC && symC && numberC) {
    for (i = 0; i < length / 3; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + sym.charAt(Math.floor(Math.random() * sym.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (lowerC && upperC && numberC) {
    for (i = 0; i < length / 3; i++) {
      pass += lower.charAt(Math.floor(Math.random() * lower.length)) + upper.charAt(Math.floor(Math.random() * upper.length)) + number.charAt(Math.floor(Math.random() * number.length))
    }
    return pass
  } else if (upperC && symC) {
    for (i = 0; i < length / 2; i++) {
      pass += upper.charAt(Math.floor(Math.random() * upper.length)) + sym.charAt(Math.floor(Math.random() * sym.length))
    }
    return pass
  } else if (symC && numberC) {
    for (i = 0; i < length / 2; i++) {
      pass += sym.charAt(Math.floor(Math.random() * sym.length)) + number.charAt(Math.floor(Math.random() * number.length))
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
  } else if (symC) {
    for (i = 0; i < length; i++) {
      pass += sym.charAt(Math.floor(Math.random() * sym.length))
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