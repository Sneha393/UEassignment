$(document).ready(function () {
    $('#loginButton').prop('disabled', true);

    // Email validation
    $('#email').on('blur', function () {
        let email = $(this).val().trim();
        let emailError = $('#emailError');

        if (email === "") {
            emailError.text('Email cannot be empty');
        } else if (!validateEmail(email)) {
            emailError.text('Invalid email format');
        } else if (!email.endsWith('@northeastern.edu')) {
            emailError.text('Please enter a Northeastern email');
        } else {
            emailError.text('');
        }
        toggleLoginButtonState();
    });

    // Username validation
    $('#username').on('blur', function () {
        let username = $(this).val().trim();
        let usernameError = $('#usernameError');

        if (username === "") {
            usernameError.text('Username cannot be empty');
        } else if (!validateSpecialCharacters(username)) {
            usernameError.text('Special characters not allowed');
        } else if (username.length < 3 || username.length > 20) {
            usernameError.text('Username length should be between 3 and 20 characters');
        } else {
            usernameError.text('');
        }
        toggleLoginButtonState();
    });

    // Password validation
    $('#password').on('blur', function () {
        let password = $(this).val();
        let passwordError = $('#passwordError');

        if (password === "") {
            passwordError.text('Password cannot be empty');
        } else if (password.length < 6) {
            passwordError.text('Password should be at least 6 characters');
        } else {
            passwordError.text('');
        }
        toggleLoginButtonState();
    });

    // Confirm Password validation
    $('#confirmPassword').on('blur', function () {
        let confirmPassword = $(this).val();
        let confirmPasswordError = $('#confirmPasswordError');
        let password = $('#password').val();

        if (confirmPassword === "") {
            confirmPasswordError.text('Confirm Password cannot be empty');
        } else if (confirmPassword !== password) {
            confirmPasswordError.text('Passwords do not match');
        } else {
            confirmPasswordError.text('');
        }
        toggleLoginButtonState();
    });

    // Toggle login button state
    function toggleLoginButtonState() {
        let emailError = $('#emailError').text();
        let usernameError = $('#usernameError').text();
        let passwordError = $('#passwordError').text();
        let confirmPasswordError = $('#confirmPasswordError').text();

        if (emailError === '' && usernameError === '' && passwordError === '' && confirmPasswordError === '') {
            $('#loginButton').prop('disabled', false);
        } else {
            $('#loginButton').prop('disabled', true);
        }
    }

    // Email format validation
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Username special characters validation
    function validateSpecialCharacters(username) {
        return /^[a-zA-Z0-9]*$/.test(username);
    }
});
