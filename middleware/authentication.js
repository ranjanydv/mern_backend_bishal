const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
	const token = req.signedCookies.userToken
	console.log(
		'🚀 ~ file: authentication.js:6 ~ authenticateUser ~ token:',
		token
	)

	if (!token)
		throw new CustomError.UnauthenticatedError('Invalid Authentication')

	try {
		const payload = isTokenValid({ token })
		req.user = {
			name: payload.name,
			userId: payload.userId,
			role: payload.role,
		}
		req.token = token
		next()
	} catch (e) {
		console.log(e)
		throw new CustomError.UnauthenticatedError('Invalid Authentication')
	}
}

const authenticateUserMobile = async (req, res, next) => {
	const token = req.header('x-auth-token')
	if (!token)
		throw new CustomError.UnauthenticatedError('No token, authorization denied')

	try {
		const payload = isTokenValid({ token })
		req.user = {
			name: payload.name,
			userId: payload.userId,
			role: payload.role,
		}
		next()
	} catch (e) {
		console.log(e)
		throw new CustomError.UnauthenticatedError('Invalid Authentication')
	}
}

const authorizePermissions = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			throw new CustomError.UnauthorizedError('Not Authorized to this route')
		}
		next()
	}
}

module.exports = { authenticateUser, authorizePermissions }
