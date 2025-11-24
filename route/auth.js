const router = require('express').Router();
const { registerUser, loginUser, updatePassword } = require('../controller/auth.controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/change-password', authMiddleware, updatePassword);


module.exports = router;