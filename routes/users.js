const express = require('express')
const userController = require('../controllers/users')
const protect = require("../middlewares/auth"); 


const router = express.Router()

router.get('/me', protect, userController.getMe)


module.exports = router;