const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const auth = require('./routes/auth');
const employees = require('./routes/employees');
const jobs = require('./routes/jobs');
const policies = require('./routes/policies');

// Mount Routers
app.use('/api/v1/auth', auth);
app.use('/api/v1/employees', employees);
app.use('/api/v1/jobs', jobs);
app.use('/api/v1/policies', policies);

const path = require('path');

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    // Any route that is not API will be redirected to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
    });
} else {
    // Basic Route
    app.get('/', (req, res) => {
        res.send('HR Dashboard API is running');
    });
}

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
