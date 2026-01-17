const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller.js');
const middleware = require('../middlewares/auth.middleware.js');

router.put('/theme', middleware.authMiddleware, controller.updateTheme);

module.exports = router;