// ---------------------------
// LIGHT/DARK MODE TOGGLE
// ---------------------------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ---------------------------
// COUNTER GAME
// ---------------------------
let counter = 0;
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');

increaseBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

// ---------------------------
// COLLAPSIBLE FAQ
// ---------------------------
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('visible');
    });
});

// ---------------------------
// TABBED INTERFACE
// ---------------------------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hide all contents
        tabContents.forEach(content => content.style.display = 'none');
        // Remove active class from all buttons
        tabButtons.forEach(button => button.classList.remove('active'));
        // Show selected tab
        const tabId = btn.dataset.tab;
        document.getElementById(tabId).style.display = 'block';
        btn.classList.add('active');
    });
});

// ---------------------------
// FORM VALIDATION
// ---------------------------
const form = document.getElementById('userForm');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission

    let valid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if(name === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    if(password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if(valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
