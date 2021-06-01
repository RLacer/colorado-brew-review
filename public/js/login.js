const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("hello")
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      console.log("hi there");
      // Send a POST request to the API endpoint
    fetch('/api/user/login', {
        // const response = await fetch('/profile', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function() {
        document.location.replace('/profile');
      })
  .catch(err => console.log(err))
  
      // if (response.ok) {
      //   // If successful, redirect the browser to the profile page
      //   document.location.replace('/profile');
      // } else {
      //   alert(response.statusText);
      // }
    }
  };
  
  const signupFormHandler = async (event) => {
    // event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  console.log("hello")
    if (username && email && password) {
      const response = await fetch('/api/user', {
        // const response = await fetch('/profile', {   
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  console.log("hello")
  document
    .querySelector('.login-form')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('#signup-btn')
    .addEventListener('click', signupFormHandler);