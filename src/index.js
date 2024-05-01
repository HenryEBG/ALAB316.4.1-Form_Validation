
const registerForm = document.querySelector("#registration")


const userName = registerForm.elements["username"]
const email = registerForm.elements["email"]
const password = registerForm.elements["password"]
const passwordCheck = registerForm.elements["passwordCheck"]
const terms = registerForm.elements["terms"]
const localStorage = []




function alert(message) {
  const errorEl = document.getElementById('errorDisplay');
  errorEl.style.display = 'block';
  errorEl.textContent = message;

  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 3000);
}

function success(message) {
  const errorEl = document.getElementById('errorDisplay');
  errorEl.style.display = 'block';
  errorEl.style.backgroundColor = 'aqua'
  errorEl.style.color = "green"
  errorEl.textContent = message;

  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 10000);
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


function validateTerms() {
  if (!terms.checked) {
    alert('The terms and conditions must be accepted.');
    terms.focus()
    return false;
  }
  return terms.value
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
    event.returnValue = false;
    return false;
  } else if (validateTerms() == false) {
    event.returnValue = false;
    return false;
  } else {
    //mensaje de exito
    success('You are now register ' + userName.value)
    //guardar los datos
    const user = {}
    user.userName = userName.value.toLowerCase()
    user.password = password.value
    user.email = email.value
      .toLowerCase()
    localStorage.push(user)
    console.log(localStorage)
    //limpiar el formulario
    userName.value = ""
    password.value = ""
    passwordCheck.value = ""
    email.value = ""
    terms.checked=false
    //hacer focus en el username
    userName.focus()
  }


}

const loginForm = document.getElementById("login")
const userNameLogin = loginForm.elements["username"]
const passwordLogin = loginForm.elements["password"]
const persistLogin = loginForm.elements["persist"]


// function validateUsernameLogin(){
//   if(userNameLogin===""){
//     alert(`The username cannot be blank.`)
//     userNameLogin.focus()
//     return false  
//   }

//   if (password.value.toUpperCase().match(PatternUsername) !== null) {
//     alert(`Password cannot contain the username.`)
//     password.focus()
//     return false
//   }
// }

function validateLogin(event) {
  event.preventDefault()
  console.log(userNameLogin)
  if (userNameLogin.value === "") {
    alert(`The username cannot be blank.`)
    userNameLogin.focus()
    event.returnValue = false;
    return false;
  } else if (passwordLogin.value === "") {
    alert(`The password cannot be blank.`)
    passwordLogin.focus()
    event.returnValue = false;
    return false;
  } else if (localStorage.filter(function (user) {
      console.log( ((user.userName === userNameLogin.value.toLowerCase()) && (user.password === passwordLogin.value)))
    return ((user.userName === userNameLogin.value.toLowerCase()) && (user.password === passwordLogin.value))

  }).length>0) {
    if (!persistLogin.checked) {
      success('You are now login ' + userName.value)
    } else {
      success('You are now login ' + userName.value + 'And you be permanently login but this is a fantasy world')
    }
    userNameLogin.value = ""
    passwordLogin.value = ""
    persistLogin.checked=false
    return true
   
  } else {
    alert(`The username or password doesn't exist in my wonderful database`)
    userNameLogin.focus()
    event.returnValue = false
    return false

  }
 }

  registerForm.addEventListener('submit', validateRegister)

  loginForm.addEventListener('submit', validateLogin)
