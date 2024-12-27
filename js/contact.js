document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Create or get message container
            let messageContainer = document.querySelector('.form-message');
            if (!messageContainer) {
                messageContainer = document.createElement('div');
                messageContainer.className = 'form-message';
                contactForm.appendChild(messageContainer);
            }

            try {
                // Simulate form submission (replace with actual API endpoint)
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success message
                messageContainer.className = 'form-message success';
                messageContainer.style.display = 'block';
                messageContainer.textContent = 'Thank you! Your message has been sent successfully.';

                // Clear form
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    messageContainer.style.display = 'none';
                }, 5000);

            } catch (error) {
                // Show error message
                messageContainer.className = 'form-message error';
                messageContainer.style.display = 'block';
                messageContainer.textContent = 'Oops! Something went wrong. Please try again later.';

                // Hide message after 5 seconds
                setTimeout(() => {
                    messageContainer.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', (e) => {
            e.preventDefault();
            input.classList.add('error');
        });

        input.addEventListener('input', () => {
            if (input.validity.valid) {
                input.classList.remove('error');
            }
        });
    });
});
