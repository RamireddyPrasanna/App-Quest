function checkPassword() {
    const password = document.getElementById('password').value;
    const strengthText = document.getElementById('strength');
    let strength = 0;

    // Criteria checks
    if (password.length >= 8) strength++; // Length
    if (/[A-Z]/.test(password)) strength++; // Uppercase letter
    if (/[a-z]/.test(password)) strength++; // Lowercase letter
    if (/[0-9]/.test(password)) strength++; // Number
    if (/[\W_]/.test(password)) strength++; // Special character

    // Set strength message
    switch (strength) {
        case 0:
        case 1:
            strengthText.textContent = 'Very Weak';
            strengthText.style.color = 'red';
            break;
        case 2:
            strengthText.textContent = 'Weak';
            strengthText.style.color = 'orange';
            break;
        case 3:
            strengthText.textContent = 'Medium';
            strengthText.style.color = 'yellow';
            break;
        case 4:
            strengthText.textContent = 'Strong';
            strengthText.style.color = 'lightgreen';
            break;
        case 5:
            strengthText.textContent = 'Very Strong';
            strengthText.style.color = 'green';
            break;
    }
}
