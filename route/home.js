
const router = require('express').Router();

router.get('/welcome', (req, res) => {
    return res.send('Welcome to the Home Page');
});

module.exports = router;