const router = require('express').Router();
const {uploadImage, deleteImage} = require('../controller/image.controller');
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');


router.post('/upload', authMiddleware, isAdmin, uploadMiddleware.single('image'), uploadImage);

router.delete('/delete/:id', authMiddleware, isAdmin, deleteImage);

module.exports = router;