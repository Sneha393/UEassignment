$(document).ready(function () {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('name');
    $('#loggedInUsername').text(username);

    $('#addButton, #subtractButton, #multiplyButton, #divideButton').on('click', function () {
        let number1 = $('#number1').val().trim();
        let number2 = $('#number2').val().trim();
        let operation = $(this).attr('id').replace('Button', '');

        // Validate numbers and perform calculations
        if (validateNumber(number1) && validateNumber(number2)) {
            const result = calculate(parseFloat(number1), parseFloat(number2), operation);
            $('#result').val(result);
        }
    });

    // Validate number input
    function validateNumber(num) {
        let numberError = num === '' ? 'Field cannot be empty' : '';
        const regex = /^\d*\.?\d+$/; // Allows positive decimal numbers

        if (num !== '' && !regex.test(num)) {
            numberError = 'Invalid number';
        }

        $('#number1Error, #number2Error').text(numberError);
        return numberError === '';
    }

    // Calculate based on the operation
    function calculate(num1, num2, operation) {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                if (num2 === 0) {
                    return 'Infinity';
                }else{
                return num1 / num2;
                if (!isFinite(result)) {
                    result = 'Infinity';
                }
            }return result;
            default:
                return '';
        }
    }
});
