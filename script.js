const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorSpan = document.querySelector(".error");
const card = document.querySelector('.newsletter-cta');
const cardTwo = document.querySelector('.card');
const dismissButton = cardTwo.querySelector('.button'); // Select the dismiss button

// Function to validate email using a regex pattern
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate email input
    const email = emailInput.value;
    if (!validateEmail(email)) {
        errorSpan.style.display = 'block'; // Show error message
        emailInput.classList.add('invalid'); // Optionally add an invalid class for styling
    } else {
        errorSpan.style.display = 'none'; // Hide error message
        emailInput.classList.remove('invalid'); // Remove invalid class if present
        card.classList.add('hide'); // Hide the sign-up form
        cardTwo.classList.remove('hide'); // Show the success message
    }
});

// Optional: Add event listener to hide error message on input focus
emailInput.addEventListener('focus', () => {
    errorSpan.style.display = 'none';
    emailInput.classList.remove('invalid');
});

// Add event listener for the dismiss button
dismissButton.addEventListener('click', () => {
    cardTwo.classList.add('hide'); // Hide the success message
    card.classList.remove('hide'); // Show the sign-up form
    form.reset(); // Reset the form fields
});
