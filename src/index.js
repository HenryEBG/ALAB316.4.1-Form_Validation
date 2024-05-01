
const registerForm = document.querySelector("#registration")

const userName = registerForm.elements["username"]
const email = registerForm.elements["email"]
const password = registerForm.elements["password"]
const passwordCheck = registerForm.elements["passwordCheck"]
//const errorMessage = document.getElementById("errorDisplay")

function alert(message) {
  const errorEl = document.getElementById('errorDisplay');
  errorEl.style.display = 'block';
  errorEl.textContent = message;

  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 3000);
}


function validateUsername() {
  const twoOrMorePattern = /(.)(?<!1.)(?!.*\1)(.)(?<!3)/
  const onlyWordAndNumbers = /^[\w]+$/

  if (userName.value === '') {
    alert("The username cannot be blank.")
    userName.focus()
    return false
  } else if (userName.value.length < 4) {
    alert("The username must be at least four characters long.")
    userName.focus()
    return false
  } else if (userName.value.match(twoOrMorePattern) === null) {
    alert("The username must contain at least two unique characters.")
    userName.focus()
    return false
  } else if (userName.value.match(onlyWordAndNumbers) === null) {
    alert("The username cannot contain any special characters or whitespace.")
    userName.focus()
    return false
  }
  return userName.value
}

function validateEmail() {
  const validEmailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const notValidEmailExample = /@example.com/
  if (email.value.match(validEmailPattern) === null) {
    alert("The email must be a valid email address.")
    email.focus()
    return false
  } else if (email.value.match(notValidEmailExample) !== null) {
    alert(`The email must not be from the domain "example.com."`)
    email.focus()
    return false
  }
  return email.value
}

function validatePassword() {
  const pattern12Chars = /[\w]{12,}/ // /[^[:space:]]{12,}/
  const pattern1Lower = /[a-z]{1,}/ ///[[:lower:]]{1,}/ 
  const pattern1Upper = /[A-Z]{1,}/
  const pattern1Digit = /[0-9]{1,}/
  const pattern1SpecialChar = /[^\w]{1,}/
  const patternPASSWORD = /PASSWORD/
  const PatternUsername = new RegExp(userName.value.toUpperCase())

  if (password.value.match(pattern12Chars) === null) {
    alert("Password must be at least 12 characters long.")
    password.focus()
    return false
  }
  if (password.value.match(pattern1Lower) === null) {
    alert("Password must have at least one lowercase letter.")
    password.focus()
    return false
  }
  if (password.value.match(pattern1Upper) === null) {
    alert("Password must have at least one uppercase letter.")
    password.focus()
    return false
  }
  if (password.value.match(pattern1Digit) === null) {
    alert("Password must have at least one number.")
    password.focus()
    return false
  }
  if (password.value.match(pattern1Digit) === null) {
    alert("Password must have at least one number.")
    password.focus()
    return false
  }
  if (password.value.match(pattern1SpecialChar) === null) {
    alert("Password must have at least one special Character.")
    password.focus()
    return false
  }
  if (password.value.toUpperCase().match(patternPASSWORD) !== null) {
    alert(`Password cannot contain the word "password" (uppercase, lowercase, or mixed).`)
    password.focus()
    return false
  }
  if (password.value.toUpperCase().match(PatternUsername) !== null) {
    alert(`Password cannot contain the username.`)
    password.focus()
    return false
  }
  if (password.value.toUpperCase().match(PatternUsername) !== null) {
    alert(`Password cannot contain the username.`)
    password.focus()
    return false
  }

  if (password.value !== passwordCheck.value) {
    alert(`Both passwords must match.`)
    password.focus()
    return false
  }
  //passwords has to be equal.
  return password.value
}


function validateRegister(event) {

  event.preventDefault()
  if (validateUsername() === false) {
    event.returnValue = false;
    return false;
  } else if (validateEmail() === false) {
    event.returnValue = false;
    return false;
  } else if (validatePassword() == false) {

  }


}



registerForm.addEventListener('submit', validateRegister)
