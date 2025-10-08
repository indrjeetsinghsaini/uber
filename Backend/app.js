// app.js

// Load environment variables from a .env file for local development
const dotenv = require('dotenv');
dotenv.config();

// Import required packages
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Import local modules
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

// Initialize the Express application
const app = express();

// --- Database Connection ---
// Establishes connection to your MongoDB database
connectToDb();

// --- CORS Configuration ---
// This is the most important part for connecting your frontend and backend.
// It explicitly allows your Vercel site to make requests to this server.
// Backend/app.js

// Find this line:
app.use(cors());

// And REPLACE it with this block:
const corsOptions = {
    origin: 'https://uber-indrjeetsinghsainis-projects.vercel.app', // Your Vercel URL
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(cors(corsOptions));

// --- Global Middleware ---
// Parses incoming JSON request bodies
app.use(express.json());
// Parses incoming URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
// Parses cookies attached to the client request object
app.use(cookieParser());

// --- Test Route ---
// A simple route to confirm the server is running when you visit its URL.
app.get('/', (req, res) => {
    res.send('Uber Clone Backend is running successfully!');
});

// --- API Routes ---
// Mounts the different route handlers to their specific paths.
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

// --- Export the App ---
// This makes the configured Express app available for your server.js file to use.
module.exports = app;
