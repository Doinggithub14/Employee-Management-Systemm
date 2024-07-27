document.addEventListener('DOMContentLoaded', function() {
    // Login Functionality
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent form from submitting the default way
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            // Hardcoded credentials
            const validUsername = 'Emp';
            const validPassword = 'Emp123';

            if (username === validUsername && password === validPassword) {
                // Set login state
                localStorage.setItem('loggedIn', 'true');
                console.log('LoggedIn set to:', localStorage.getItem('loggedIn')); // Log the value of loggedIn
                // Redirect to the dashboard page
                window.location.href = 'Rakesh.html';
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        });
    }

    // Attendance Functionality
    const clockInBtn = document.getElementById('clock-in-btn');
    const clockOutBtn = document.getElementById('clock-out-btn');
    const clockInTime = document.getElementById('clock-in-time');
    const clockOutTime = document.getElementById('clock-out-time');
    const totalHours = document.getElementById('total-hours');

    if (clockInBtn && clockOutBtn && clockInTime && clockOutTime && totalHours) {
        // Load existing times from localStorage
        const savedClockInTime = localStorage.getItem('clockInTime');
        const savedClockOutTime = localStorage.getItem('clockOutTime');

        if (savedClockInTime) {
            clockInTime.textContent = `Clock In Time: ${savedClockInTime}`;
        } else {
            clockInTime.textContent = 'Not clocked in yet';
        }

        if (savedClockOutTime) {
            clockOutTime.textContent = `Clock Out Time: ${savedClockOutTime}`;
        } else {
            clockOutTime.textContent = 'Not clocked out yet';
        }

        function calculateTotalHours() {
            const inTime = new Date(localStorage.getItem('clockInTime'));
            const outTime = new Date(localStorage.getItem('clockOutTime'));

            if (inTime && outTime && !isNaN(inTime.getTime()) && !isNaN(outTime.getTime())) {
                const diff = (outTime - inTime) / (1000 * 60 * 60); // Difference in hours
                totalHours.textContent = `Total Hours Worked: ${diff.toFixed(2)} hours`;
            } else {
                totalHours.textContent = 'Total Hours Worked: N/A';
            }
        }

        clockInBtn.addEventListener('click', function() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            localStorage.setItem('clockInTime', now.toISOString());
            clockInTime.textContent = `Clock In Time: ${timeString}`;
            calculateTotalHours(); // Update total hours after clocking in
        });

        clockOutBtn.addEventListener('click', function() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            localStorage.setItem('clockOutTime', now.toISOString());
            clockOutTime.textContent = `Clock Out Time: ${timeString}`;
            calculateTotalHours(); // Update total hours after clocking out
        });

        // Calculate initial total hours if both clock in and out times exist
        calculateTotalHours();
    }

    // Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    function showSection(sectionId) {
        contentSections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Show the home section by default
    showSection('home');

    // Logout Functionality
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }
    const redirectBtn = document.getElementById('redirect-btn');
    if (redirectBtn) {
        redirectBtn.addEventListener('click', function() {
            window.location.href = 'perfomance.html'; // Update this to your desired URL
        });
    }
});
