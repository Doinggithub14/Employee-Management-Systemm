document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('helpdesk-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Here you can add your logic to send the form data to your server
        // For this example, we'll just show a success message

        successMessage.classList.remove('hidden');
        form.reset();
    });
});