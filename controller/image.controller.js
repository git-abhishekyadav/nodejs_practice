const Image = require('../models/image');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/clodinaryHelper');
const fs = require('fs');

// Upload Image Controller
const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload to Cloudinary
    const { url, publicId } = await uploadToCloudinary(file.path);

    // Save image info to database
    const newImage = new Image({
      url: url,
      publicId: publicId,
      uploadedBy: req.userInfo.userId
    });

    const savedImage = await newImage.save();

    fs.unlinkSync(file.path); // Clean up local file
    return res.status(201).json({ status:true, message: 'Image uploaded successfully', data: savedImage });
} catch (error) {
    return res.status(500).json({ status:false, message: error.message });
  }
};

const deleteImage = async(req,res) => {
  try {
    const imageId = req.params.id;
    const userId = req.userInfo.userId;
    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).json({ status:false, message: 'Image not found' });
    }

    if(image.uploadedBy.toString() !== userId) {
      return res.status(403).json({ status:false, message: 'Unauthorized to delete this image' });
    }

    const isDeleted = await deleteFromCloudinary(image.publicId);

    if(!isDeleted) {
      return res.status(500).json({ status:false, message: 'Failed to delete image from Cloudinary' });
    }

    const deletedImage = await Image.findByIdAndDelete(imageId);

    if(!deletedImage) { 
      return res.status(500).json({ status:false, message: 'Failed to delete image from database' });
    }

    return res.status(200).json({ status:true, message: 'Image deleted successfully' });
  } catch (error) {
    return res.status(500).json({ status:false, message: error.message });
  }
}

module.exports = { uploadImage, deleteImage };