# 🏋️‍♂️ Gym Management System — Modular & Responsive

A **fully modular**, **web-based** Gym Management System with a clean UI, responsive design, and **separate files for each functionality**, making it easy to maintain and expand.

🔗 **Live Demo:** [https://sastidharan07.github.io/Gym-Management/](https://sastidharan07.github.io/Gym-Management/)

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

## 🖼 Preview

![Screenshot 1](https://github.com/user-attachments/assets/a6e606c6-aaa6-44f8-aed7-47b2b4518265)  
![Screenshot 2](https://github.com/user-attachments/assets/51733709-6a6e-46e5-b118-041df686dd3a)  
![Screenshot 3](https://github.com/user-attachments/assets/d14f75b6-c0c7-4657-9764-9899959d29c6)  
![Screenshot 4](https://github.com/user-attachments/assets/1a5a01b1-6b37-45ad-aa6a-4e8e19e51876)  
![Screenshot 5](https://github.com/user-attachments/assets/6534f9de-9a46-4e70-bac0-c34a2e8d34c8)  
![Screenshot 6](https://github.com/user-attachments/assets/f6e18bf0-30a6-4d0c-9333-e24ffde27dc7)  

---

## 📝 Notes

- All data stays **on the user’s device** via `localStorage`.  
- To reset data, clear browser site data or add a reset utility.  
- Consider exporting/importing JSON for backups as a future enhancement.

## 📄 License

Use freely for learning or internal projects.
