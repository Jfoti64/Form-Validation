import { validateInput } from './validation';

const emailInput = document.getElementById('email');
const emailFeedbackElement = document.getElementById('emailFeedback');
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

emailInput.addEventListener('blur', () => {
    validateInput(emailInput, emailFeedbackElement, emailMessages);
});

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailFeedbackElement.style.display = 'none';
    } else {
        validateInput(emailInput, emailFeedbackElement, emailMessages);
    }
});

zipInput.addEventListener('blur', () => {
    validateInput(zipInput, zipFeedbackElement, zipMessages);
});

zipInput.addEventListener('input', () => {
  if (zipInput.validity.valid) {
    zipFeedbackElement.style.display = 'none';
  } else {
    validateInput(zipInput, zipFeedbackElement, zipMessages);
  }
});
