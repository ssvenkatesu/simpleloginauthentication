# 🔐 Modern Login Authentication System

A beautiful, secure, and modern authentication system built with Node.js, Express, MySQL, and modern CSS.

## ✨ Features

- **Secure Authentication**: Password hashing with bcrypt
- **Session Management**: Persistent login sessions
- **Modern UI**: Beautiful gradient design with animations
- **Responsive Design**: Works on all devices
- **Interactive Forms**: Loading states and focus effects
- **Dashboard**: Protected user dashboard
- **Real-time Updates**: Live login time display

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd simpleloginauthentication
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MySQL Database**
   
   Create a MySQL database and user:
   ```sql
   -- Connect to MySQL as root
   mysql -u root -p
   
   -- Create database
   CREATE DATABASE login;
   
   -- Create user (optional, you can use root)
   CREATE USER 'auth_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON login.* TO 'auth_user'@'localhost';
   FLUSH PRIVILEGES;
   
   -- Use the database
   USE login;
   
   -- Create users table
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Configure Database Connection**
   
   Update the database configuration in `app.js`:
   ```javascript
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'your_username',        // Change this
       password: 'your_password',    // Change this
       database: 'login'
   });
   ```

5. **Start the application**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
simpleloginauthentication/
├── app.js                 # Main server file
├── package.json           # Project dependencies
├── views/                 # HTML templates
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   └── home.html         # Dashboard page
├── static/               # Static assets
│   └── style.css         # Modern CSS styles
└── node_modules/         # Dependencies
```

## 🎨 Design Features

- **Modern Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Frosted glass effect on containers
- **Smooth Animations**: Fade-in and slide-up animations
- **Interactive Elements**: Hover effects and focus states
- **Loading States**: Visual feedback during form submission
- **Responsive Layout**: Adapts to all screen sizes

## 🔧 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

## 🛡️ Security Features

- **Password Hashing**: Uses bcrypt for secure password storage
- **Session Management**: Secure session handling
- **Input Validation**: Form validation on both client and server
- **SQL Injection Protection**: Parameterized queries

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/login` | Login page |
| POST   | `/login` | Process login |
| GET    | `/register` | Registration page |
| POST   | `/register` | Process registration |
| GET    | `/home` | Protected dashboard |
| GET    | `/logout` | Logout user |

## 🎯 Usage

1. **Registration**: Create a new account with username and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: Access your protected dashboard
4. **Logout**: Securely sign out

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `static/style.css`:
```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
background: linear-gradient(135deg, #667eea, #764ba2);
```

### Adding Features
- Email verification
- Password reset
- User profiles
- Two-factor authentication

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MySQL is running
   - Verify credentials in `app.js`
   - Ensure database exists

2. **Port Already in Use**
   - Change port in `app.js` (line 125)
   - Kill existing process: `lsof -ti:3000 | xargs kill`

3. **Module Not Found**
   - Run `npm install` to install dependencies

## 📝 License

ISC License - feel free to use this project for learning and development.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

---

**Happy Coding! 🚀**
