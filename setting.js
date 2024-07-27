document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.getElementById('settings-form');
    const settingsSuccessMessage = document.getElementById('settings-success-message');
    const currentPhoto = document.getElementById('current-photo');

    // Mock user data (in real application, this would come from your backend)
    const userProfile = {
        photo: 'default-avatar.png',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    };

    // Function to load user data into the form
    function loadUserData() {
        currentPhoto.src = userProfile.photo;
        document.getElementById('profile-name').value = userProfile.name;
        document.getElementById('profile-email').value = userProfile.email;
        document.getElementById('profile-phone').value = userProfile.phone;
    }

    // Load user data when the page loads
    loadUserData();

    settingsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const profilePhoto = document.getElementById('profile-photo').files[0];
        const profileName = document.getElementById('profile-name').value;
        const profileEmail = document.getElementById('profile-email').value;
        const profilePhone = document.getElementById('profile-phone').value;

        // Update user data (in real application, this would send data to your backend)
        if (profilePhoto) {
            const reader = new FileReader();
            reader.onload = function(e) {
                currentPhoto.src = e.target.result;
                userProfile.photo = e.target.result; // Update mock data
            };
            reader.readAsDataURL(profilePhoto);
        }
        userProfile.name = profileName;
        userProfile.email = profileEmail;
        userProfile.phone = profilePhone;

        console.log('Updated user profile:', userProfile);

        settingsSuccessMessage.classList.remove('hidden');
        setTimeout(() => settingsSuccessMessage.classList.add('hidden'), 3000);
    });
});