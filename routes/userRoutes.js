const express = require('express');
const { loginController, registerController, authController, applyDoctorController, bookAppointmentController, getAllNotificationsController, deleteAllNotificationsController, getAllDoctorsController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//routes
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/getUserData',authMiddleware, authController);
router.post('/apply-doctor', authMiddleware, applyDoctorController);
router.post('/get-all-notifications', authMiddleware, getAllNotificationsController);
router.post('/delete-all-notifications', authMiddleware, deleteAllNotificationsController);


//get all doc
router.get('/getAllDoctors',authMiddleware, getAllDoctorsController);
router.post('/book-appointment', authMiddleware, bookAppointmentController);


module.exports = router; //export the router
