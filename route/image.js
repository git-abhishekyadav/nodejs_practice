const router = require('express').Router();
const {uploadImage} = require('../controller/image.controller');
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');


router.post('/upload', authMiddleware, isAdmin, uploadMiddleware.single('image'), uploadImage);

module.exports = router;