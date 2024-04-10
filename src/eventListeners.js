import { emailFeedback } from './validation';

const emailInput = document.getElementById('email');

// Use the blur event to report validity once the user clicks off the element
emailInput.addEventListener('blur', () => {
  const feedbackElement = document.getElementById('emailFeedback');
  if (!emailInput.validity.valid) {
    emailFeedback(emailInput, feedbackElement);
    feedbackElement.style.display = 'block';
  }
});

emailInput.addEventListener('input', () => {
  const feedbackElement = document.getElementById('emailFeedback');
  if (emailInput.validity.valid) {
    feedbackElement.style.display = 'none';
  } else {
    emailFeedback(emailInput, feedbackElement);
  }
});
