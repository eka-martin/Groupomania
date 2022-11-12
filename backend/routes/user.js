const express = require('express');
const router = express.Router();

const checkPassword = require("../middlewares/check-password");
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/user');

router.post('/signup', checkPassword, userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/me', auth, userCtrl.me);

module.exports = router;