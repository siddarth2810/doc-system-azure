const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb Connected: ${conn.connection.host}`.bgGreen.black);
    }
    catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold);
        process.exit(1);

    }

}

module.exports = connectDB;
