
const registerForm = document.querySelector("#registration")


const userName = registerForm.elements["username"]
const email = registerForm.elements["email"]

function validateUsername() {
  const twoOrMorePattern = /(.)(?<!1.)(?!.*\1)(.)(?<!3)/
  const onlyWordAndNumbers = /^[\w]+$/

  if (userName.value === '') {
    window.alert("The username cannot be blank.")
    userName.focus()
    return false
  } else if (userName.value.length < 4) {
    window.alert("The username must be at least four characters long.")
    userName.focus()
    return false
  } else if (userName.value.match(twoOrMorePattern) === null) {
    window.alert("The username must contain at least two unique characters.")
    userName.focus()
    return false
  } else if (userName.value.match(onlyWordAndNumbers) === null) {
    window.alert("The username cannot contain any special characters or whitespace.")
    userName.focus()
    return false
  }
  return userName.value
}

function validateEmail(){
  const validEmailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  const notValidEmailExample = /@example.com/
  if (email.value.match(validEmailPattern) === null) {
    window.alert("The email must be a valid email address.")
    email.focus()
    return false
  } else if (email.value.match(notValidEmailExample) !== null) {
    window.alert(`The email must not be from the domain "example.com."`)
    email.focus()
    return false
  }
}


function validateRegister(event) {

  event.preventDefault()
  if (validateUsername() === false) {
    event.returnValue = false;
    return false;
  } else if(validateEmail()===false){
    event.returnValue = false;
    return false;
  } 


}



registerForm.addEventListener('submit', validateRegister)
