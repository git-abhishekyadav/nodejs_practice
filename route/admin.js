const router = require('express').Router();

router.get('/welcome',(req, res) => {
   return res.send('Admin Login');
});

module.exports = router;