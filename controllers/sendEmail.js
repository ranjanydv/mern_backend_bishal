const nodemailer = require('nodemailer')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const sendEmailController = async (req, res) => {
	const { name, email, contact, subject, message } = req.body

	if (!name || !email || !subject || !message) {
		throw new CustomError.BadRequestError('Incomplete Data')
	}
	const userName = name.split(' ')[0]
	const userEmail = email
	const userContact = contact
	const userSubject = subject
	const userMessage = message

	// let testAccount = await nodemailer.createTestAccount()
	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'markus.boyer59@ethereal.email',
			pass: 'P6nqwAKq6W3ynEWYBJ',
		},
	})

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: email,
		to: 'theranzanydv@gmail.com',
		subject: userSubject,
		html: `<h4>Message from ${userName}</h4>
		<h5>Email Address : ${userEmail}</h5>
		<h5>Contact : ${userContact}</h5>
		<p>${userMessage}</p>
		`,
	})

	res.json(info)
}

module.exports = sendEmailController
