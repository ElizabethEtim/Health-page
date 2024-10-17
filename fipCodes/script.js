const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const getStartedButton = document.querySelector('.btn');
const form = document.getElementById('health-form');
const welcomeMessage = document.getElementById('welcome-message');

//Toggle Mobile Navigation Menu
function toggleMenu() {
    navMenu.classList.toggle('active');
}

//Handle "Get Started" Button Click
function handleGetStarted() {
    alert("Thank you for choosing Fettle Mind and Body! We will get back to you shortly.");
}

//Validate Form Inputs
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve form values
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const phone = document.getElementById('Phone').value.trim();
    const email = document.getElementById('mail').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const contactMethods = document.getElementById('contact').selectedOptions;

    // Validation
    if (!fname || !lname || !phone || !email || !gender || !age || !weight || !height) {
        alert("Please fill in all required fields.");
        return;
    }

    // Display selected contact methods
    let contacts = [];
    for (let option of contactMethods) {
        contacts.push(option.text);
    }

    // Show success message
    alert(`Thank you, ${fname} ${lname}! We will contact you via ${contacts.join(', ')}.`);
    
    // Optionally, submit the form or reset it
    form.reset();
}

//Update Welcome Message Based on Time of Day
function updateWelcomeMessage() {
    const currentHour = new Date().getHours();
    let message = "Welcome to Fettle Mind and Body";

    if (currentHour < 12) {
        message = "Good Morning! Welcome to Fettle Mind and Body";
    } else if (currentHour < 18) {
        message = "Good Afternoon! Welcome to Fettle Mind and Body";
    } else {
        message = "Good Evening! Welcome to Fettle Mind and Body";
    }

    welcomeMessage.textContent = message;
}

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);
getStartedButton.addEventListener('click', handleGetStarted);
form.addEventListener('submit', validateForm);

// Initialize Functions on Page Load
window.onload = function() {
    updateWelcomeMessage();
};