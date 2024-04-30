
const registerForm = document.querySelector("#registration")


const userName = registerForm.elements["username"]

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


function validateRegister(event) {

  event.preventDefault()
  const valUserName = validateUsername()
  if (valUserName === false) {
    event.returnValue = false;
    return false;
  }


}



registerForm.addEventListener('submit', validateRegister)
