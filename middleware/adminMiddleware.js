
const isAdmin = (req, res, next) => {
    if (req.userInfo && req.userInfo.role === 'admin') {
        next();
    } else {
       return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
};

module.exports = isAdmin;