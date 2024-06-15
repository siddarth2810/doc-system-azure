const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

// dotenv config
dotenv.config();

// initialize express
const app = express();

// MONGO DB CONNECTION
connectDB();

// middlewares
app.use(express.json()); // to reduce parsing errors
app.use(morgan('dev'));

const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('Hello World! This is the root route.');
});

app.use(express.static('./client/dist'));

app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "client", "dist",     
   "index.html"));
});

app.post('/api/v1/user/register', (req, res, next) => {
    console.log('Received POST request at /api/v1/user/register');
    console.log('Request Body:', req.body);
    next();
});


// routes
app.use("/api/v1/user", require('./routes/userRoutes'));

app.set('port', process.env.PORT || 8082);
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} Mode`);
});

