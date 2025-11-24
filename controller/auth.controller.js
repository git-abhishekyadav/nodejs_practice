const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');    

const registerUser = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;

        const user = await User.findOne({ $or: [ {email}, {userName} ] });

        if (user) {
            return  res.status(400).json({status:false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ userName, email, password: hashedPassword, role });
        const savedUser = await newUser.save();
        if(!savedUser) {
           return res.status(400).json({status:false, message: "Failed to register user" });
        } 
            return res.status(201).json({ status: true, message: 'User Successfully Registered'});
        
    } catch (error) {
       return res.status(500).json({status:false, message: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const authToken = jwt.sign({ userId: user._id, role: user.role, userName: user.userName, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ status: true, message: 'Login successful', authToken });
    } catch (error) {
        return res.status(500).json({status:false, message: "Internal Server Error" });
    }
};

const updatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const userId = req.userInfo.userId;

        const user = await User.findById(userId);
        if (!user || !(await bcrypt.compare(oldPassword, user.password))) {
            return res.status(401).json({ status: false, message: 'Invalid old password' });
        }

        if(oldPassword === newPassword) {
            return res.status(400).json({ status: false, message: 'New password must be different from old password' });
        }   

        if(newPassword.length < 6) {
            return res.status(400).json({ status: false, message: 'New password must be at least 6 characters long' });
        }   

        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashedNewPassword;
        await user.save();

        return res.status(200).json({ status: true, message: 'Password updated successfully' });
    } catch (error) {
        return res.status(500).json({status:false, message: "Internal Server Error" });
    }
};

module.exports = { registerUser, loginUser, updatePassword };       