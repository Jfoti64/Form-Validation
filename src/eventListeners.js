import { validateInput } from './validation';

const emailInput = document.getElementById('email');
const emailFeedbackElement = document.getElementById('emailFeedback');
const countryInput = document.getElementById('country');
const countryFeedbackElement = document.getElementById('countryFeedback');
const zipInput = document.getElementById('zip');
const zipFeedbackElement = document.getElementById('zipFeedback');
const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');

const emailMessages = {
  valueMissing: 'This field is required.',
  typeMismatch: 'Please enter a valid email.',
  tooShort: 'Please lengthen this email to 5 characters or more.',
};

const zipMessages = {
  valueMissing: 'This field is required.',
  patternMismatch: 'Zip code must be 5 digits.',
};

const countryMessages = {
  valueMissing: 'This field is required.',
};

const passwordMessages = {
    valueMissing: 'This field is required.',
    patternMismatch: 'Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.',
}

emailInput.addEventListener('blur', () => {
  validateInput(emailInput, emailFeedbackElement, emailMessages);
});

emailInput.addEventListener('input', () => {
  validateInput(emailInput, emailFeedbackElement, emailMessages);
});

zipInput.addEventListener('blur', () => {
  validateInput(zipInput, zipFeedbackElement, zipMessages);
});

zipInput.addEventListener('input', () => {
  validateInput(zipInput, zipFeedbackElement, zipMessages);
});

countryInput.addEventListener('blur', () => {
  validateInput(countryInput, countryFeedbackElement, countryMessages);
});

countryInput.addEventListener('input', () => {
  validateInput(countryInput, countryFeedbackElement, countryMessages);
});

passwordInput.addEventListener('blur', () => {
    validateInput(passwordInput, passwordFeedback, passwordMessages);
});

passwordInput.addEventListener('input', () => {
    validateInput(passwordInput, passwordFeedback, passwordMessages);
});

document.getElementById('validationForm').addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Check if the form is valid before "submitting"
  if (document.getElementById('validationForm').checkValidity()) {
    // Handle successful submission (e.g., display a success message or redirect)
    alert('Hi5');
  } else {
    // Optionally focus the first invalid input for better user experience
  }
});
