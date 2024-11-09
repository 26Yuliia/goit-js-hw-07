const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const obj = {
    email: email,
    password: password,
  };

  console.log(obj);

  form.reset();
});

//const loginForm = document.querySelector('.form');

//loginForm.addEventListener('submit', handleSubmit);

//function handleSubmit(event) {
//event.preventDefault();
// const form = event.target;
//  const email = form.elements.email.value;
// const password = form.elements.password.value;

// if (email === '' || password === '') {
//   return console.log('All form fields must be filled in');
// }

//  form.reset();
//  console.log(`Login: ${email}, Password: ${password}`);
//}
