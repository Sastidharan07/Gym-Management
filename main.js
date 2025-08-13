// Main Application Logic

// Tab functionality
function showTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load tab content
    const tabContent = document.getElementById('tabContent');
    
    switch(tabName) {
        case 'add-customer':
            loadAddCustomerTab(tabContent);
            break;
        case 'add-activity':
            loadAddActivityTab(tabContent);
            break;
        case 'view-customers':
            loadViewCustomersTab(tabContent);
            break;
    }
}

// Load Add Customer tab content
function loadAddCustomerTab(container) {
    container.innerHTML = `
        <h2>Add New Customer</h2>
        <form onsubmit="handleAddCustomer(event)">
            <div class="form-row">
                <div class="form-group">
                    <label for="customerName">Full Name</label>
                    <input type="text" id="customerName" required>
                </div>
                <div class="form-group">
                    <label for="customerAge">Age</label>
                    <input type="number" id="customerAge" min="1" max="120" required>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="customerHeight">Height (cm)</label>
                    <input type="number" id="customerHeight" min="50" max="300" step="0.1" required>
                </div>
                <div class="form-group">
                    <label for="customerWeight">Weight (kg)</label>
                    <input type="number" id="customerWeight" min="20" max="500" step="0.1" required>
                </div>
            </div>
            
            <div class="form-group">
                <label for="customerPhone">Phone Number</label>
                <input type="tel" id="customerPhone" required>
            </div>
            
            <button type="submit" class="btn">Add Customer</button>
        </form>
    `;
}

// Load Add Activity tab content
function loadAddActivityTab(container) {
    container.innerHTML = `
        <h2>Add Daily Activity</h2>
        <form onsubmit="handleAddActivity(event)">
            <div class="form-group">
                <label for="activityCustomer">Select Customer</label>
                <select id="activityCustomer" required>
                    <option value="">Choose a customer...</option>
                </select>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="activityDate">Date</label>
                    <input type="date" id="activityDate" required>
                </div>
                <div class="form-group">
                    <label for="activityType">Activity Type</label>
                    <select id="activityType" required>
                        <option value="">Select activity...</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Weight Training">Weight Training</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Swimming">Swimming</option>
                        <option value="CrossFit">CrossFit</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="activityDuration">Duration (minutes)</label>
                    <input type="number" id="activityDuration" min="1" max="480" required>
                </div>
                <div class="form-group">
                    <label for="activityCalories">Calories Burned</label>
                    <input type="number" id="activityCalories" min="0" max="2000">
                </div>
            </div>
            
            <div class="form-group">
                <label for="activityNotes">Notes (optional)</label>
                <textarea id="activityNotes" rows="3" placeholder="Any additional notes about the workout..."></textarea>
            </div>
            
            <button type="submit" class="btn">Add Activity</button>
        </form>
    `;
    
    // Populate customer dropdown
    updateCustomerDropdown();
    
    // Set today's date as default
    document.getElementById('activityDate').valueAsDate = new Date();
}

// Load View Customers tab content
function loadViewCustomersTab(container) {
    container.innerHTML = `
        <h2>Customer List</h2>
        <div id="customersList"></div>
    `;
    
    displayCustomers();
}

// Handle add customer form submission
function handleAddCustomer(event) {
    event.preventDefault();
    
    const customerData = {
        name: document.getElementById('customerName').value,
        age: parseInt(document.getElementById('customerAge').value),
        height: parseFloat(document.getElementById('customerHeight').value),
        weight: parseFloat(document.getElementById('customerWeight').value),
        phone: document.getElementById('customerPhone').value
    };
    
    addNewCustomer(customerData);
    
    // Reset form
    event.target.reset();
    
    alert('Customer added successfully!');
}

// Handle add activity form submission
function handleAddActivity(event) {
    event.preventDefault();
    
    const activityData = {
        customerId: parseInt(document.getElementById('activityCustomer').value),
        date: document.getElementById('activityDate').value,
        type: document.getElementById('activityType').value,
        duration: parseInt(document.getElementById('activityDuration').value),
        calories: parseInt(document.getElementById('activityCalories').value) || 0,
        notes: document.getElementById('activityNotes').value
    };
    
    addNewActivity(activityData);
    
    // Reset form
    event.target.reset();
    
    alert('Activity added successfully!');
}

// Update customer dropdown
function updateCustomerDropdown() {
    const select = document.getElementById('activityCustomer');
    if (!select) return;
    
    select.innerHTML = '<option value="">Choose a customer...</option>';
    
    customers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer.id;
        option.textContent = customer.name;
        select.appendChild(option);
    });
}

// Display customers
function displayCustomers() {
    const container = document.getElementById('customersList');
    if (!container) return;
    
    if (customers.length === 0) {
        container.innerHTML = '<p>No customers found. Add some customers first!</p>';
        return;
    }
    
    container.innerHTML = customers.map(customer => {
        const customerActivities = getCustomerActivities(customer.id);
        const bmi = calculateBMI(customer.weight, customer.height);
        
        return `
            <div class="customer-card">
                <div class="customer-header">
                    <div class="customer-name">${customer.name}</div>
                    <button class="btn btn-danger" onclick="handleDeleteCustomer(${customer.id})">Delete</button>
                </div>
                
                <div class="customer-info">
                    <div class="info-item">
                        <strong>Age:</strong> ${customer.age} years
                    </div>
                    <div class="info-item">
                        <strong>Height:</strong> ${customer.height} cm
                    </div>
                    <div class="info-item">
                        <strong>Weight:</strong> ${customer.weight} kg
                    </div>
                    <div class="info-item">
                        <strong>BMI:</strong> ${bmi}
                    </div>
                    <div class="info-item">
                        <strong>Phone:</strong> ${customer.phone}
                    </div>
                    <div class="info-item">
                        <strong>Join Date:</strong> ${customer.joinDate}
                    </div>
                </div>
                
                <div class="activities">
                    <h4>Recent Activities (${customerActivities.length} total)</h4>
                    ${customerActivities.length === 0 ? 
                        '<p>No activities recorded yet.</p>' : 
                        customerActivities.slice(-5).reverse().map(activity => `
                            <div class="activity-item">
                                <strong>${activity.date}</strong> - ${activity.type} 
                                (${activity.duration} min, ${activity.calories} cal)
                                ${activity.notes ? `<br><em>${activity.notes}</em>` : ''}
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        `;
    }).join('');
}

// Handle delete customer
function handleDeleteCustomer(customerId) {
    if (confirm('Are you sure you want to delete this customer and all their activities?')) {
        deleteCustomerById(customerId);
        displayCustomers();
    }
}
