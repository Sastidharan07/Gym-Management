// Authentication Module

// Default admin credentials
const defaultCredentials = {
    username: 'admin',
    password: 'gym123'
};

// Check if user is logged in on page load
window.onload = function() {
    const isLoggedIn = localStorage.getItem('gymLoggedIn');
    if (isLoggedIn === 'true') {
        showMainApp();
        showTab('add-customer'); // Default tab
    } else {
        showLoginPage();
    }
};

// Login function
function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    // Check credentials
    if (username === defaultCredentials.username && password === defaultCredentials.password) {
        localStorage.setItem('gymLoggedIn', 'true');
        localStorage.setItem('gymUsername', username);
        showMainApp();
        showTab('add-customer'); // Show default tab
        errorDiv.classList.add('hidden');
    } else {
        errorDiv.textContent = 'Invalid username or password!';
        errorDiv.classList.remove('hidden');
        
        // Clear the error after 3 seconds
        setTimeout(() => {
            errorDiv.classList.add('hidden');
        }, 3000);
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('gymLoggedIn');
        localStorage.removeItem('gymUsername');
        showLoginPage();
    }
}

// Show login page
function showLoginPage() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('mainApp').classList.add('hidden');
    
    // Clear login form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Show main application
function showMainApp() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
}
