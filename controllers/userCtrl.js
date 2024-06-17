const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {

        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            console.warn('User already exists:', req.body.email);
            return res.status(200).send({ success: false, message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new userModel({ ...req.body, password: hashedPassword });
        await newUser.save();

        console.log('User registered successfully:', req.body.email);
        res.status(201).send({ success: true, message: 'Registration successful' });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email }).lean();
        if (!user) {
            return res.status(401).send({ message: 'User does not exist' })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(401).send({ message: `Invaild password or Email` })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).send({ success: true, message: 'Login successful!', token });

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ message: `Internel server error ${err.message}` })
    }
};


const authController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId }).lean();
        if (!user) {
            return res.status(401).send({ message: 'User does not exist' })
        }
        else {
            return res.status(200).send({
                success: true,
                message: 'User is authenticated',
                data: {
                    name: user.name,
                    email: user.email
                },
            });
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({ message: `Internel server error ${err.message}` })
    }
}
module.exports = { registerController, loginController, authController };
