// Data storage
let customers = JSON.parse(localStorage.getItem('gymCustomers')) || [];
let activities = JSON.parse(localStorage.getItem('gymActivities')) || [];

// Authentication
const defaultCredentials = {
    username: 'admin',
    password: 'gym123'
};

// Authentication functions
function login(username, password) {
    if (username === defaultCredentials.username && password === defaultCredentials.password) {
        localStorage.setItem('gymLoggedIn', 'true');
        localStorage.setItem('gymUsername', username);
        return true;
    }
    return false;
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('gymLoggedIn');
        localStorage.removeItem('gymUsername');
        window.location.href = 'login.html';
    }
}

function isLoggedIn() {
    return localStorage.getItem('gymLoggedIn') === 'true';
}

// Data management functions
function saveCustomers() {
    localStorage.setItem('gymCustomers', JSON.stringify(customers));
}

function saveActivities() {
    localStorage.setItem('gymActivities', JSON.stringify(activities));
}

function getCustomers() {
    return customers;
}

function getCustomerById(id) {
    return customers.find(customer => customer.id === id);
}

function getCustomerActivities(customerId) {
    return activities.filter(activity => activity.customerId === customerId);
}

function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(1);
}

function addCustomer(customerData) {
    const customer = {
        id: Date.now(),
        ...customerData,
        joinDate: new Date().toLocaleDateString()
    };
    
    customers.push(customer);
    saveCustomers();
    return customer;
}

function addActivity(activityData) {
    const activity = {
        id: Date.now(),
        ...activityData
    };
    
    activities.push(activity);
    saveActivities();
    return activity;
}

function deleteCustomer(customerId) {
    customers = customers.filter(customer => customer.id !== customerId);
    activities = activities.filter(activity => activity.customerId !== customerId);
    
    saveCustomers();
    saveActivities();
}

// Dashboard functions
function updateDashboardStats() {
    const customerCountEl = document.getElementById('customerCount');
    const activityCountEl = document.getElementById('activityCount');
    const totalMembersEl = document.getElementById('totalMembers');
    const todayActivitiesEl = document.getElementById('todayActivities');
    const weekActivitiesEl = document.getElementById('weekActivities');
    
    if (customerCountEl) customerCountEl.textContent = customers.length;
    if (activityCountEl) activityCountEl.textContent = activities.length;
    if (totalMembersEl) totalMembersEl.textContent = customers.length;
    
    // Today's activities
    const today = new Date().toISOString().split('T')[0];
    const todayActivities = activities.filter(activity => activity.date === today);
    if (todayActivitiesEl) todayActivitiesEl.textContent = todayActivities.length;
    
    // This week's activities
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const weekActivities = activities.filter(activity => {
        const activityDate = new Date(activity.date);
        return activityDate >= oneWeekAgo;
    });
    if (weekActivitiesEl) weekActivitiesEl.textContent = weekActivities.length;
}

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}

// Initialize data on page load
document.addEventListener('DOMContentLoaded', function() {
    // Refresh data from localStorage
    customers = JSON.parse(localStorage.getItem('gymCustomers')) || [];
    activities = JSON.parse(localStorage.getItem('gymActivities')) || [];
});
