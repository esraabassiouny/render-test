const express = require('express')
const authController = require('../controllers/auth')

const router = express.Router()

router.post('/sign-up', authController.signupUser)

router.post('/log-in', authController.loginUser)

router.post('/forgot-password', authController.signupUser)

module.exports = router;