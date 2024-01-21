// Set default values for existing users
localStorage.setItem('user1', JSON.stringify({ username: 'existingUser1', password: 'password1' }));
localStorage.setItem('user2', JSON.stringify({ username: 'existingUser2', password: 'password2' }));

function toggleSections(sectionNumber) {
    // Disable all sections
    document.getElementById('section1').disabled = true;
    document.getElementById('section2').disabled = true;
    document.getElementById('section3').disabled = true;

    // Enable the selected section
    document.getElementById('section' + sectionNumber).disabled = false;
}

function newUserLogin() {
    // Get values from the form
    var username = document.getElementById('newUsername').value;
    var password = document.getElementById('newPassword').value;
    var city = document.getElementById('newCity').value;
    var state = document.getElementById('newState').value;

    // Save values to localStorage
    localStorage.setItem('newUser', JSON.stringify({ username: username, password: password, city: city, state: state }));

    // Display welcome message
    alert('Welcome ' + username);
}

function existingUserLogin() {
    // Get values from the form
    var enteredUsername = document.getElementById('existingUsername').value;
    var enteredPassword = document.getElementById('existingPassword').value;

    // Retrieve values from localStorage for existing users
    var storedUser1 = JSON.parse(localStorage.getItem('user1'));
    var storedUser2 = JSON.parse(localStorage.getItem('user2'));

    // Check if entered username and password match stored values
    if (
        (enteredUsername === storedUser1.username && enteredPassword === storedUser1.password) ||
        (enteredUsername === storedUser2.username && enteredPassword === storedUser2.password)
    ) {
        // Display welcome back message
        alert('Welcome back ' + enteredUsername);
    } else {
        // Display invalid message
        alert('Invalid');
    }
}
