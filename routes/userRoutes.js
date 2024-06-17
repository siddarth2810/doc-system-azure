const express = require('express');
const { loginController, registerController, authController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//routes
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/getUserData',authMiddleware, authController);


module.exports = router; //export the router
