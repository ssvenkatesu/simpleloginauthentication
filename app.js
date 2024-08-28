const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const session = require('express-session');

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "static" folder
app.use(express.static(path.join(__dirname, 'static')));

// Session management
app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sankara@2718',
    database: 'login'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});

// Serve the login page
app.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/home'); // Redirect to home if already logged in
    }
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Serve the registration page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

// Serve the home page
app.get('/home', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login'); // Redirect to login if not authenticated
    }
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

// Handle form submission for registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL query to insert the user data into the database
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.execute(sql, [username, hashedPassword], (err, result) => {
        if (err) {
            console.log('Error inserting data:', err.message);
            return res.status(500).send('Error saving data to the database.');
        }

        console.log('User registered successfully');
        res.send('Registration successful!');
    });
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // SQL query to find the user by username
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.execute(sql, [username], async (err, results) => {
        if (err) {
            console.log('Error fetching data:', err.message);
            return res.status(500).send('Error fetching data from the database.');
        }

        if (results.length === 0) {
            return res.status(401).send('Invalid username or password');
        }

        const user = results[0];

        // Compare the hashed password with the provided password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Store user info in session
            req.session.user = user;
            res.redirect('/home');
        } else {
            res.status(401).send('Invalid username or password');
        }
    });
});

// Handle logout
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error destroying session:', err.message);
            return res.status(500).send('Error logging out.');
        }
        res.redirect('/login'); // Redirect to login page after logout
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
