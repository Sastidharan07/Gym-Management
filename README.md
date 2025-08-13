# 🏋️‍♂️ Gym Management System — Modular & Responsive

A **fully modular**, **web-based** Gym Management System with a clean UI, responsive design, and **separate files for each functionality**, making it easy to maintain and expand.

---

## 📂 File Structure
gym-management/
├── index.html # Main HTML layout & navigation
├── styles.css # All styles & responsive design
├── auth.js # Login & authentication logic
├── data.js # Data handling & localStorage management
├── main.js # Main app logic & UI control
└── README.md # Project documentation


---

## 🚀 Features by Module

### 🔐 Authentication (`auth.js`)
- Secure **login** with session management
- **Logout** functionality
- Error handling for invalid credentials
- Demo credentials: `admin / gym123`

### 💾 Data Management (`data.js`)
- Customer **CRUD** (Create, Read, Delete)
- **Activity tracking** (type, duration, calories, date, notes)
- **Automatic BMI** calculation
- **localStorage** persistence
- Input **validation**

### 🏠 Main Application (`main.js`)
- Smooth **tab navigation**
- Dynamic content rendering
- Form handling & event wiring
- Customer + activity list management

### 🎨 Styling (`styles.css`)
- **Responsive** (mobile / tablet / desktop)
- Modern **UI components**
- CSS Grid & Flexbox layout
- Subtle hover & focus states

---

## 📖 How to Use

1. **Download** all files to a folder.  
2. **Open** `index.html` in any modern browser.  
3. **Login** using:
   - **Username:** `admin`
   - **Password:** `gym123`
4. Use tabs to navigate:
   - **Add Customer** → Register members  
   - **Add Activity** → Log workouts  
   - **View Customers** → View progress & history  

---

## ✅ Key Features

### 👤 Customer Management
- Add members with **name, age, height, weight, contact**
- Auto **BMI** + **join date** tracking
- Delete with **confirmation**

### 🏃 Activity Tracking
- Multiple **activity types**
- **Duration** + **calories** + **date**
- Optional **notes**
- Per-customer **activity history**

### 🔒 Security & UX
- **Login/Logout** + basic session persistence
- **Mobile-friendly** UI
- **Form validation** + confirmations

---

## 💻 Technical Details

- **Browser**: Modern ES6-compatible  
- **Storage**: Browser `localStorage` (no server required)  
- **Layout**: CSS Grid + Flexbox  
- **Architecture**: Clean, modular files

---

## 🛠️ Customization

- **auth.js** → Add users / integrate real auth
- **data.js** → Extend data model or fields
- **main.js** → Add tabs, features, filters
- **styles.css** → Tweak colors, spacing, typography

---

## 🔑 Demo Credentials

| Username | Password |
|----------|----------|
| admin    | gym123   |

---

## 🧩 Module Dependencies

- `auth.js` → Independent  
- `data.js` → Independent  
- `main.js` → Depends on `data.js`  
- All modules consume styles from `styles.css`

---

## 🧪 Development Tips

1. Add new functions to the right module.  
2. Wire UI actions in `main.js`.  
3. Add styles in `styles.css`.  
4. Test in multiple browsers & screen sizes.

---

## 📝 Notes

- All data stays **on the user’s device** via `localStorage`.  
- To reset data, clear browser site data or add a reset utility.  
- Consider exporting/importing JSON for backups as a future enhancement.

## 📄 License

Use freely for learning or internal projects. Add a license here if needed.
