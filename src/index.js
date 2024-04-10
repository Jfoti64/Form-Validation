import "./style.css";

const emailInput = document.getElementById('email');
const feedbackElement = document.getElementById('emailFeedback');

emailInput.addEventListener('blur', function() {
    if (this.validity.valid) {
        // If the email input matches the pattern and is not empty
        feedbackElement.style.display = 'none';
    } else {
        // If the input is invalid
        feedbackElement.style.display = 'block';
    }
});

// Remove feedback when input refocused
// Try to make repeatable for all inputs!
emailInput.addEventListener('click', function() {
    feedbackElement.style.display = 'none';
});

