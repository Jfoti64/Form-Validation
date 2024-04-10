import './style.css';

const emailInput = document.getElementById('email');

function emailFeedback(input, feedbackElement) {
  if (input.validity.valid) {
    feedbackElement.style.display = 'none';
  } else {
    // Check different types of validity errors and set messages accordingly
    if (input.validity.valueMissing) {
      feedbackElement.textContent = 'This field is required.';
    } else if (input.validity.typeMismatch) {
      feedbackElement.textContent = 'Please enter a valid email.';
    } else if (input.validity.tooShort) {
      feedbackElement.textContent = `Please lengthen this email to ${input.minLength} characters or more. You are currently using ${input.value.length} characters.`;
    }
    feedbackElement.style.display = 'block';
  }
}

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

