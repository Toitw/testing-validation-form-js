document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fields = {
        email: {
            element: document.getElementById('email'),
            validation: /^\S+@\S+\.\S+$/,
            error: 'Please enter a valid email address'
        },
        country: {
            element: document.getElementById('country'),
            validation: /^\S+/,
            error: 'Please enter your country'
        },
        zip: {
            element: document.getElementById('zip'),
            validation: /^\d{5}$/,
            error: 'Please enter a valid zip code'
        },
        password: {
            element: document.getElementById('password'),
            error: 'Password should be at least 8 characters'
        },
        confirmPassword: {
            element: document.getElementById('confirm-password'),
            error: 'Passwords do not match'
        }
    };

    for (const field of Object.values(fields)) {
        field.element.addEventListener('input', function() {
            let error = field.element.nextElementSibling;

            if (field.validation && !field.validation.test(field.element.value)) {
                if (!error || !error.classList.contains('error-message')) {
                    error = document.createElement('div');
                    error.textContent = field.error;
                    error.classList.add('error-message');
                    field.element.parentNode.insertBefore(error, field.element.nextSibling);
                    field.element.style.border = '1px solid red';
                    field.element.style.outline = '1px solid red';
                }
            } else {
                if (error && error.classList.contains('error-message')) {
                    error.remove();
                    field.element.style.border = '1px solid black';
                    field.element.style.outline = '0px solid black';
                }
            }
        });
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;

        for (const field of Object.values(fields)) {
            if (field.validation && !field.validation.test(field.element.value)) {
                isValid = false;
                const error = field.element.nextElementSibling;
                if (!error || !error.classList.contains('error-message')) {
                    error = document.createElement('div');
                    error.textContent = field.error;
                    error.classList.add('error-message');
                    field.element.parentNode.insertBefore(error, field.element.nextSibling);
                    field.element.style.border = '1px solid red';
                    field.element.style.outline = '1px solid red';
                }
            }
        }

        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all fields correctly.');
        } else {
            alert('High five!');
        }
    });
});


