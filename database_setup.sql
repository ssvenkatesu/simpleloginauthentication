-- Database Setup Script for Login Authentication System
-- Run this script in MySQL to set up the required database and table

-- Create database
CREATE DATABASE IF NOT EXISTS login;

-- Use the database
USE login;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert a test user (password: 'password123')
-- Note: This is just for testing. In production, use the registration form.
INSERT IGNORE INTO users (username, password) VALUES 
('testuser', '$2b$10$rQZ8KjJ8KjJ8KjJ8KjJ8K.8KjJ8KjJ8KjJ8KjJ8KjJ8KjJ8KjJ8KjJ');

-- Show the created table structure
DESCRIBE users;

-- Show all users (for verification)
SELECT id, username, created_at FROM users;
