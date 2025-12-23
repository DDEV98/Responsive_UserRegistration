# 🚀 Futuristic Registration & Login System

A stunning, fully responsive user registration and login system featuring **Three.js animations**, **glassmorphic UI**, and **real-time form validation**. Built with modern web technologies for an immersive user experience.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

---

## ✨ Features

### 🎯 Core Functionality
- **User Registration** - Complete signup with validation
- **Dual Login System** - Login via Email/Password or Mobile Number Search
- **Profile Management** - View and edit user data in real-time
- **Mobile Number Search** - Find registered users by phone number
- **In-Memory Database** - Fast data storage using jQuery

### 🎨 UI/UX Highlights
- **Three.js Background** - Animated 3D torus and particle system
- **Glassmorphic Design** - Modern frosted glass effects with backdrop blur
- **Real-Time Progress Bar** - Visual form completion tracking (0-100%)
- **Live Validation** - Instant feedback with color-coded borders
- **Smooth Animations** - 60fps transitions and hover effects
- **Responsive Layout** - Perfect on mobile, tablet, and desktop

### 🔒 Validation Features
- Full Name: Alphabets only
- Email: Valid email format
- Password: Minimum 6 characters with show/hide toggle
- Mobile: Exactly 10 digits
- Address: Required field
- Gender: Radio button selection
- Date of Birth: Calendar picker with max date validation


---

## 🚀 Live Demo

👉 **[View Live Demo](https://ddev98.github.io/futuristic-registration-system/)**

---

## 📦 Installation

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/futuristic-registration-system.git
   cd futuristic-registration-system
   ```

2. **Open in browser**
   ```bash
   # Simply open the index.html file
   open index.html
   # or
   start index.html
   ```

That's it! No build process or dependencies required.

### Alternative: Use with Live Server

If you have VS Code with Live Server extension:
```bash
# Right-click on index.html and select "Open with Live Server"
```

---

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure | - |
| **CSS3** | Styling & Animations | - |
| **JavaScript** | Logic & Interactivity | ES6+ |
| **jQuery** | DOM Manipulation & Data | 3.6.0 |
| **Three.js** | 3D Background Animation | r128 |
| **Tailwind CSS** | Utility-First Styling | CDN |

---

## 📂 Project Structure

```
futuristic-registration-system/
│
├── index.html              # Main HTML file (single file application)
├── README.md               # Project documentation
├── style.css               #styling  
└── script.js               #scripting
---

## 💡 How to Use

### 1️⃣ Registration
1. Fill out all required fields (marked with *)
2. Watch the progress bar fill as you complete fields
3. Real-time validation provides instant feedback
4. Click "Register" to create account

### 2️⃣ Login Options

**Option A: Email Login**
- Enter registered email and password
- Click "Login"

**Option B: Mobile Search**
- Switch to "Mobile Search" tab
- Enter registered 10-digit mobile number
- View user details
- Click "Login as This User"

### 3️⃣ Profile Management
- View your profile information
- Click "Edit Profile" to modify data
- Save changes or cancel
- Logout when done

---

## 🎨 Key Design Elements

### Glassmorphic Cards
```css
background: rgba(15, 23, 42, 0.5);
backdrop-filter: blur(30px);
border: 1px solid rgba(148, 163, 184, 0.15);
```

### Animated Progress Bar
- Updates in real-time as form is filled
- Glowing gradient effect
- Smooth transitions

### Three.js Animation
- 3D wireframe torus
- 1500+ floating particles
- Continuous rotation

### Color Palette
- **Primary**: #3b82f6 (Blue)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #ec4899 (Pink)
- **Background**: #0a0e1a (Dark Navy)
- **Success**: #10b981 (Green)
- **Error**: #ef4444 (Red)

---

## ⚙️ Configuration

### Customize Colors
Edit the CSS gradient values in the `<style>` section:

```css
/* Primary gradient */
background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);

/* Change to your colors */
background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 50%, #yourcolor3 100%);
```

### Modify Validation Rules
Edit validation functions in the `<script>` section:

```javascript
function validateField(name, value) {
    switch(name) {
        case 'mobile':
            return /^[0-9]{10}$/.test(value); // Change regex pattern
        // ... other validations
    }
}
```

### Adjust Three.js Settings
```javascript
// Change particle count
const particlesCount = 1500; // Increase/decrease

// Change torus size
const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
```

---

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

**Note**: Requires modern browser with ES6+ and WebGL support for Three.js animations.

---

## 🔐 Data Storage

This application uses **in-memory storage** via JavaScript arrays:

```javascript
let users = []; // Stores all registered users
let currentUser = null; // Stores logged-in user
```

**Important Notes:**
- Data is stored temporarily during the session
- Refreshing the page will clear all data
- For production, integrate with a backend API
- Consider using `localStorage` for persistent storage

---

## 🚧 Future Enhancements

- [ ] Add password strength meter
- [ ] Implement email verification
- [ ] Add "Forgot Password" functionality
- [ ] Integrate with backend API (Node.js/Express)
- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement JWT authentication
- [ ] Add profile picture upload
- [ ] Create admin dashboard
- [ ] Add multi-language support
- [ ] Implement dark/light theme toggle
- [ ] Add export profile data feature
- [ ] Create user activity logs

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update README if needed
- Keep commits atomic and well-described

---

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License



Copyright (c) 2025 [Doman Lal]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

**Your Name**

- GitHub: [DDEV98](https://github.com/yourusername)
- LinkedIn: [Doman Lal](https://linkedin.com/in/yourprofile)
- Website: [yourwebsite.com](https://reachoutdoman.netlify.app)
- Email: devsingh12249@gmail.com

---

## 🙏 Acknowledgments

- **Three.js** - For amazing 3D graphics library
- **jQuery** - For simplified DOM manipulation
- **Tailwind CSS** - For utility-first CSS framework
- **Lucide Icons** - For beautiful icon set
- **Google Fonts** - For Inter font family
- **Community** - For inspiration and feedback


---

## 💬 Support

If you like this project, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the code
- 📢 Sharing with others

---

## 📝 Changelog

### Version 1.0.0 (2024-12-23)
- ✨ Initial release
- 🎨 Futuristic UI with Three.js
- 🔐 Complete authentication system
- 📱 Fully responsive design
- ⚡ Real-time validation
- 📊 Progress tracking
- 🔍 Mobile number search

---

<div align="center">

**Made with ❤️ and modern web technologies**

[⬆ Back to Top](#-futuristic-registration--login-system)

</div>
