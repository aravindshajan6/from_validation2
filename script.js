function validateName() {
  let nameError = document.getElementById('username-error');
  let name = document.getElementById('username');

  if (name.value.trim() == '') {
    nameError.innerHTML = 'username cannot be blank';
    return false;
  } else if (name.value.length < 5) {
    nameError.innerHTML = 'username must not be less than 5 characters';
    return false;
  } else {
    nameError.innerHTML = '';
    return true;
  }
}

function validateEmail() {
  let emailError = document.getElementById('email-error');
  let email = document.getElementById('email');

  if (email.value.trim() == '') {
    emailError.innerHTML = 'email cannot be blank !';
    return false;
  } else if (
    !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    emailError.innerHTML = 'email not valid !';
    return false;
  } else {
    emailError.innerHTML = '';
    return true;
  }
}

function validatePassword() {
  let password = document.getElementById('password');
  let passwordError = document.getElementById('password-error');

  if (password.value.trim() == '') {
    passwordError.innerHTML = 'password cannot be blank !';
    return false;
  } else if (password.value.length < 6 || password.value.length > 20) {
    passwordError.innerHTML = 'password must be between 6 and 20 characters';
    return false;
  } else {
    passwordError.innerHTML = '';
    return true;
  }
}

function checkPassword() {
  let password = document.getElementById('password');
  let repeat = document.getElementById('repeat');
  let passwordMatch = document.getElementById('password-match');

  if (password.value != repeat.value) {
    passwordMatch.innerHTML = "Passwords don't match !";
    return false;
  } else {
    passwordMatch.innerHTML = '';
    return true;
  }
}

function validateForm() {
  let submitError = document.getElementById('submit-error');
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePassword() ||
    !checkPassword()
  ) {
    submitError.innerHTML = 'Please resolve all errors !';
    return false;
  } else {
    submitError.innerHTML = '';
    return true;
  }
}
