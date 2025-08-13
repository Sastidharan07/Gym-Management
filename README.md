# Gym Management System - Modular Version

A modular web-based gym management system with separate files for each major functionality.

## File Structure

\`\`\`
gym-management/
├── index.html          # Main HTML structure and navigation
├── styles.css          # All CSS styles and responsive design
├── auth.js             # Authentication and login functionality
├── data.js             # Data management and localStorage operations
├── main.js             # Main application logic and tab management
└── README.md           # This documentation
\`\`\`

## Features by Module

### 🔐 Authentication (auth.js)
- Secure login system
- Session management
- Logout functionality
- Demo credentials: `admin` / `gym123`

### 💾 Data Management (data.js)
- Customer data operations
- Activity tracking
- localStorage persistence
- BMI calculations
- Data validation

### 🏠 Main Application (main.js)
- Tab navigation system
- Dynamic content loading
- Form handling
- Customer and activity management
- User interface interactions

### 🎨 Styling (styles.css)
- Responsive design
- Modern UI components
- Mobile-friendly layout
- Professional color scheme

## How to Use

1. **Setup**: Download all files to a folder
2. **Launch**: Open `index.html` in your web browser
3. **Login**: Use credentials `admin` / `gym123`
4. **Navigate**: Use tabs to switch between features:
   - **Add Customer**: Register new gym members
   - **Add Activity**: Log daily workouts
   - **View Customers**: See all members and their progress

## Key Features

### Customer Management
- ✅ Add new customers with personal details
- ✅ Store height, weight, age, and contact info
- ✅ Automatic BMI calculation
- ✅ Join date tracking
- ✅ Delete customers with confirmation

### Activity Tracking
- ✅ Multiple activity types
- ✅ Duration and calorie tracking
- ✅ Date-based logging
- ✅ Optional workout notes
- ✅ Activity history per customer

### Security & UX
- ✅ Login/logout system
- ✅ Session persistence
- ✅ Responsive mobile design
- ✅ Form validation
- ✅ Confirmation dialogs

## Technical Details

### Browser Compatibility
- Modern browsers with ES6 support
- localStorage support required
- CSS Grid and Flexbox support

### Data Storage
- All data stored in browser localStorage
- Persistent between sessions
- No server or database required

### Customization
Each module can be modified independently:
- **auth.js**: Change login credentials or add new auth methods
- **data.js**: Modify data structure or add new fields
- **main.js**: Add new tabs or modify UI behavior
- **styles.css**: Customize appearance and layout

## Development

### Adding New Features
1. Add new functions to appropriate module
2. Update main.js for UI integration
3. Add styles to styles.css if needed
4. Test across different browsers

### Module Dependencies
- `auth.js` → Independent
- `data.js` → Independent  
- `main.js` → Depends on data.js
- All modules depend on styles.css

## Demo Credentials

**Username**: admin  
**Password**: gym123

## Installation

No installation required - just open `index.html` in your browser!
