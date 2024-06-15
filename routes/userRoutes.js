const express = require('express');
const { loginController, registerController } = require('../controllers/userCtrl');

const router = express.Router();

//routes
router.post('/register', registerController);
router.post('/login', loginController);


module.exports = router; //export the router
