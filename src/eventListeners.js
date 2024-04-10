import { validateInput } from './validation';

const emailInput = document.getElementById('email');
const emailFeedbackElement = document.getElementById('emailFeedback');
const countryInput = document.getElementById('country');
const countryFeedbackElement = document.getElementById('countryFeedback');
const zipInput = document.getElementById('zip');
const zipFeedbackElement = document.getElementById('zipFeedback');

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
