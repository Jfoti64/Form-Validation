function validateInput(input, feedbackElement, customMessages) {
  let message = '';
  if (input.validity.valueMissing) {
    message = customMessages.valueMissing;
  } else if (input.validity.typeMismatch) {
    message = customMessages.typeMismatch;
  } else if (input.validity.tooShort) {
    message = customMessages.tooShort;
  } else if (input.validity.patternMismatch) {
    message = customMessages.patternMismatch;
  }
  feedbackElement.textContent = message;
  feedbackElement.style.display = message ? 'block' : 'none';
}

function validateMatchingPasswords(passwordInput, confirmPasswordInput, feedbackElement) {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('');
    feedbackElement.style.display = 'none';
  } else {
    const mismatchMessage = 'Passwords must match.';
    confirmPasswordInput.setCustomValidity(mismatchMessage);
    feedbackElement.textContent = mismatchMessage;
    feedbackElement.style.display = 'block';
  }
}

export { validateInput, validateMatchingPasswords };
