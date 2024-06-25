const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path'); // Required for resolving paths

// dotenv config
dotenv.config();

// initialize express
const app = express();

// MONGO DB CONNECTION
connectDB();

// Middlewares
app.use(cors()); // CORS Middleware
app.use(morgan('dev')); // Logging Middleware
app.use(express.json()); // Body Parsing Middleware
app.use(express.urlencoded({ extended: false })); // URL-Encoded Parsing Middleware

// API Routes
app.use("/api/v1/user", require('./routes/userRoutes'));
app.use("/api/v1/admin", require('./routes/adminRoutes'));
app.use("/api/v1/changeAccountStatus", require('./routes/adminRoutes'));
app.use("/api/v1/doctor", require('./routes/doctorRoutes'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Catch-all route to serve the React app's index.html for unknown paths
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// Set and start the server on the correct port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

