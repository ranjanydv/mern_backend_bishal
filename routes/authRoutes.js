const express = require('express')
const router = express.Router()

const {
	register,
	login,
	logout,
	validateTokenForMobile,
	registerMerchant,
} = require('../controllers/authController')
const { authenticateUser } = require('../middleware/authentication')

// get routes
router.get('/logout', authenticateUser, logout)

// post routes
router.post('/register', register)
router.post('/login', login)
router.post('/isValidToken', validateTokenForMobile)
router.post('/joinMerchant', registerMerchant)

module.exports = router
