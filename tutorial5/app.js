const express = require('express'); 
const app = express();

// Array to store data 
const users = [
    {
        email: 'abc@abc.ca',
        firstName: 'ABC',
        id: '5abf6783'
    },
    {
        email: 'xyz@xyz.ca',
        firstName: 'XYZq',
        id: '5abf674563'
    }
];

// generator for unique IDs 
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for parsing URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// GET - Retrieves all users
app.get('/users', (req, res) => {
    try {
        if (!users.length) {
            throw new Error('No users found');
        }

        res.status(200).json({
            message: 'Users retrieved',
            success: true,
            users: users
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || 'Failed to retrieve users'
        });
    }
});

// GET - Fetches a user by ID
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        });
    }

    return res.status(200).json({
        success: true,
        user: { 
            email: user.email,
            firstName: user.firstName,
            id: user.id
        }
    });
});

// PUT - Updates a user
app.put('/update/:id', (req, res) => {
    const userId = req.params.id;
    const { email, firstName } = req.body; 
    const userToUpdate = users.find(user => user.id === userId);

    try {
        if (!userToUpdate) {
            throw new Error('User not found');
        }

        if (email) {
            userToUpdate.email = email;
        }
        if (firstName) {
            userToUpdate.firstName = firstName;
        }

        res.status(200).json({
            message: 'User updated',
            success: true
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message || 'Failed to update user'
        });
    }
});

// POST - Adds a new user
app.post('/add', (req, res) => {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
        return res.status(400).json({
            message: 'Email and firstName are required',
            success: false
        });
    }

    const newUserId = generateUniqueId();
    const newUser = {
        email,
        firstName,
        id: newUserId
    };

    users.push(newUser);
    res.status(201).json({
        message: 'User added',
        success: true
    });
});

// Catch-all middleware for 404 errors
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

// Global error handling middleware
app.use((err, req, res, next) => { 
    console.error(err.stack); 
    res.status(500).json({
        success: false,
        message: 'Internal server error' 
    });
});

module.exports = app; 