// Data Management Module

// Initialize data
let customers = JSON.parse(localStorage.getItem('gymCustomers')) || [];
let activities = JSON.parse(localStorage.getItem('gymActivities')) || [];

// Save customers to localStorage
function saveCustomers() {
    localStorage.setItem('gymCustomers', JSON.stringify(customers));
}

// Save activities to localStorage
function saveActivities() {
    localStorage.setItem('gymActivities', JSON.stringify(activities));
}

// Get customer by ID
function getCustomerById(id) {
    return customers.find(customer => customer.id === id);
}

// Get activities for a customer
function getCustomerActivities(customerId) {
    return activities.filter(activity => activity.customerId === customerId);
}

// Calculate BMI
function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(1);
}

// Add new customer
function addNewCustomer(customerData) {
    const customer = {
        id: Date.now(),
        ...customerData,
        joinDate: new Date().toLocaleDateString()
    };
    
    customers.push(customer);
    saveCustomers();
    return customer;
}

// Add new activity
function addNewActivity(activityData) {
    const activity = {
        id: Date.now(),
        ...activityData
    };
    
    activities.push(activity);
    saveActivities();
    return activity;
}

// Delete customer and their activities
function deleteCustomerById(customerId) {
    customers = customers.filter(customer => customer.id !== customerId);
    activities = activities.filter(activity => activity.customerId !== customerId);
    
    saveCustomers();
    saveActivities();
}
