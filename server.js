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

//cors
app.use(cors());


app.set('port', process.env.PORT || 8080);
// middlewares
app.use(morgan('dev'));
app.use(express.json()); // to reduce parsing errors
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./client/dist'))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.get('/', (req, res) => {
    res.send('Hello World! This is the root route.');
});


// routes
app.use("/api/v1/user", require('./routes/userRoutes'));

// Set and start the server on the correct port

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});

