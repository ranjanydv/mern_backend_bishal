const CustomError = require('../errors')

const onlyUsersReview = async (requestUser, resourceUserId) => {
	if (requestUser.role === 'user') return
	if (requestUser.userId === resourceUserId.toString()) {
		throw new CustomError.UnauthorizedError(
			'You cannot post a review on your own item'
		)
	}
}
module.exports = { onlyUsersReview }
