const express = require('express')
const router = express.Router()
const {
	authenticateUser,
	authorizePermissions,
} = require('../middleware/authentication')

const {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword,
	upgradeToMerchant,
	getUser,
} = require('../controllers/userController')

router
	.route('/')
	.get(authenticateUser, authorizePermissions('admin'), getAllUsers)
	.get(authenticateUser, getUser)

router.route('/showMe').get(authenticateUser, showCurrentUser)
router.route('/updateUser').patch(authenticateUser, updateUser)
router.route('/updateUserPassword').patch(authenticateUser, updateUserPassword)
router.route('/joinMerchant').patch(authenticateUser, upgradeToMerchant)

router.route('/:id').get(authenticateUser, getSingleUser)

module.exports = router
