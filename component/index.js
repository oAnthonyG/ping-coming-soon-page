function validateEmail(){
  const email = document.querySelector('.form-input');
  const error = document.querySelector('.error-email');

  if(!email.checkValidity()){
    error.innerHTML = 'Please provide a valid email address';
  }
}

function redefinirMsg(){
  const error = document.querySelector('.error-email');

  if(error.innerHTML =='Please provide a valid email address'){
    error.innerHTML = '';
  }
}