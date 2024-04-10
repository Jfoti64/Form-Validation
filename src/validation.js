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

export { emailFeedback };