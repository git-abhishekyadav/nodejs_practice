const cloudinary = require('../config/cloudinary.config');

const uploadToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath);
        return {
            url: result.secure_url,
            publicId: result.public_id,
        };
    } catch (error) {
        throw new Error('Cloudinary upload failed');
    }       
}

const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        throw new Error('Cloudinary deletion failed');
    }
}

module.exports = { uploadToCloudinary, deleteFromCloudinary };