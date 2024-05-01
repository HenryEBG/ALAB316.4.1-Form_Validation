
/**************************************************************
 *Form Validation
 **************************************************************/

 /************************************************************
  * Alert Function to show success or error
  * @param {} message 
  * @param {*} success 
  ************************************************************/
  function alert(message,success) {
  const errorEl = document.getElementById('errorDisplay');
  let lapsus
  errorEl.style.display = 'block'

  if(success){
    errorEl.style.backgroundColor = 'aqua'
    errorEl.style.color = "green"
    lapsus=1000
  } else {
    errorEl.style.backgroundColor = "#fcc"
    errorEl.style.color = "red"
    lapsus=5000
  }
  errorEl.textContent = message;
  setTimeout(() => {
    errorEl.style.display = 'none';
  }, lapsus);

}


/***************************************************************
 * Declare variables to point the html nodes
 ***************************************************************/
//Pointing to the element that contain the registration form 
const registerForm = document.querySelector("#registration")

//Point to the inputs elements inside the registration form
const userName = registerForm.elements["username"]
const email = registerForm.elements["email"]
const password = registerForm.elements["password"]
const passwordCheck = registerForm.elements["passwordCheck"]
const terms = registerForm.elements["terms"]
const localStorage = []

/*****************************************************************
 * Username Validation in regristration form
 *****************************************************************/
function validateUsername() {
  const twoOrMorePattern = /(.)(?<!1.)(?!.*\1)(.)(?<!3)/
  const onlyWordAndNumbers = /^[\w]+$/

  if (userName.value === '') {
    alert("The username cannot be blank.",false)
    userName.focus()
    return false
  } else if (userName.value.length < 4) {
    alert("The username must be at least four characters long.",false)
    userName.focus()
    return false
  } else if (userName.value.match(twoOrMorePattern) === null) {
    alert("The username must contain at least two unique characters.",false)
    userName.focus()
    return false
  } else if (userName.value.match(onlyWordAndNumbers) === null) {
    alert("The username cannot contain any special characters or whitespace.",false)
    userName.focus()
    return false
  }
  return userName.value
}

/*****************************************************************
 * Email Validation in regristration form
 *****************************************************************/
function validateEmail() {
  const validEmailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const notValidEmailExample = /@example.com/
  if (email.value.match(validEmailPattern) === null) {
    alert("The email must be a valid email address.",false)
    email.focus()
    return false
  } else if (email.value.match(notValidEmailExample) !== null) {
    alert(`The email must not be from the domain "example.com."`,false)
    email.focus()
    return false
  }
  return email.value
}


/*****************************************************************
 * Password Validation in regristration form
 *****************************************************************/
function validatePassword() {
  const pattern12Chars = /[\w]{12,}/ // /[^[:space:]]{12,}/
  const pattern1Lower = /[a-z]{1,}/ ///[[:lower:]]{1,}/ 
  const pattern1Upper = /[A-Z]{1,}/
  const pattern1Digit = /[0-9]{1,}/
  const pattern1SpecialChar = /[^\w]{1,}/
  const patternPASSWORD = /PASSWORD/
  const PatternUsername = new RegExp(userName.value.toUpperCase())

  if (password.value.match(pattern12Chars) === null) {
    alert("Password must be at least 12 characters long.",false)
    password.focus()
    return false
  }
  if (password.value.match(pattern1Lower) === null) {
    alert("Password must have at least one lowercase letter.",false)
    password.focus()
    return false
  }
  if (password.value.match(pattern1Upper) === null) {
    alert("Password must have at least one uppercase letter.",false)
    password.focus()
    return false
  }
  if (password.value.match(pattern1Digit) === null) {
    alert("Password must have at least one number.",false)
    password.focus()
    return false
  }
  if (password.value.match(pattern1Digit) === null) {
    alert("Password must have at least one number.",false)
    password.focus()
    return false
  }
  if (password.value.match(pattern1SpecialChar) === null) {
    alert("Password must have at least one special Character.",false)
    password.focus()
    return false
  }
  if (password.value.toUpperCase().match(patternPASSWORD) !== null) {
    alert(`Password cannot contain the word "password" (uppercase, lowercase, or mixed).`,false)
    password.focus()
    return false
  }
  if (password.value.toUpperCase().match(PatternUsername) !== null) {
    alert(`Password cannot contain the username.`,false)
    password.focus()
    return false
  }
  if (password.value.toUpperCase().match(PatternUsername) !== null) {
    alert(`Password cannot contain the username.`,false)
    password.focus()
    return false
  }

  if (password.value !== passwordCheck.value) {
    alert(`Both passwords must match.`,false)
    password.focus()
    return false
  }
  //passwords has to be equal.
  return password.value
}

/*****************************************************************
 * Agree ti terms Validation in regristration form
 *****************************************************************/
function validateTerms() {
  if (!terms.checked) {
    alert('The terms and conditions must be accepted.',false);
    terms.focus()
    return false;
  }
  return terms.value
}


/*******************************************************************************
 * Handler function to validate registration form (call the helper function up)
 ********************************************************************************/
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
    alert('You are now register ' + userName.value,true)
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
/*****************************************************************
 * Event Listener to submit the Registragion Form
 *****************************************************************/
registerForm.addEventListener('submit', validateRegister)


/**********************************************************************************************************
 **********************************************************************************************************
 */

/*****************************************************************
 * Create variables to save the node of the Login form
 *****************************************************************/

const loginForm = document.getElementById("login")
const userNameLogin = loginForm.elements["username"]
const passwordLogin = loginForm.elements["password"]
const persistLogin = loginForm.elements["persist"]

/*****************************************************************
 * Handler function to validate the login form
 *****************************************************************/

function validateLogin(event) {
  event.preventDefault()
  console.log(userNameLogin)
  if (userNameLogin.value === "") {
    alert(`The username cannot be blank.`,false)
    userNameLogin.focus()
    event.returnValue = false;
    return false;
  } else if (passwordLogin.value === "") {
    alert(`The password cannot be blank.`,false)
    passwordLogin.focus()
    event.returnValue = false;
    return false;
  } else if (localStorage.filter(function (user) {
    return ((user.userName === userNameLogin.value.toLowerCase()) && (user.password === passwordLogin.value))

  }).length>0) {
    if (!persistLogin.checked) {
      alert('You are now login ' + userName.value,true)
    } else {
      alert('You are now login ' + userName.value + 'And you be permanently login but this is a fantasy world',true)
    }
    userNameLogin.value = ""
    passwordLogin.value = ""
    persistLogin.checked=false
    return true
  } else {
    alert(`The username or password doesn't exist in my wonderful database`,false)
    userNameLogin.focus()
    event.returnValue = false
    return false
  }
 }

 /*****************************************************************
 * Event Listener to submit the Login Form
 *****************************************************************/ 

  loginForm.addEventListener('submit', validateLogin)
