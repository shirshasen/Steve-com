// Select the Login and Signup forms
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");

// Select the Login and Signup buttons
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");

// Select the Signup link in the Login form
const signupLink = document.querySelector(".signup-link a");

// Select the title text for Login and Signup
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

// Event listener for Signup button click
signupBtn.onclick = () => {
    // Slide the form to show the Signup form
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

// Event listener for Login button click
loginBtn.onclick = () => {
    // Slide the form to show the Login form
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

// Event listener for the Signup link in the Login form
signupLink.onclick = () => {
    // Simulate a click on the Signup button
    signupBtn.click();
    return false; // Prevent default link behavior
};