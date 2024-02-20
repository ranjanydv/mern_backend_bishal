// const Profile = require('../models/Profile')
// const User = require('../models/User')
// const { StatusCodes } = require('http-status-codes')
// const CustomError = require('../errors')
// const path = require('path')
// const fs = require('fs')
// const cloudinary = require('cloudinary').v2

// const uploadProfileImage = async (req, res) => {
// 	const result = await cloudinary.uploader.upload(
// 		req.files.image.tempFilePath,
// 		{
// 			use_filename: false,
// 			folder: 'premiere-auctioneers/profiles',
// 		}
// 	)
// 	fs.unlinkSync(req.files.image.tempFilePath)
// 	return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
// }

// const getSingleUserProfile = async (req, res) => {
// 	const user = await Profile.findOne({ user: req.params.id }).populate('user')
// 	if (!user) {
// 		throw new CustomError.NotFoundError(
// 			`No user profile with id ${req.params.id} found`
// 		)
// 	}
// 	// await checkPermissions(req.user, user._id)
// 	res.status(StatusCodes.OK).json({ user })
// }

// const createProfile = async (req, res) => {
// 	req.body.user = req.user.userId
// 	const profile = await Profile.create(req.body)
// 	res.status(StatusCodes.CREATED).json({ profile })
// }

// const uploadDocumentImage = async (req, res) => {
// 	const result = await cloudinary.uploader.upload(
// 		req.files.image.tempFilePath,
// 		{
// 			use_filename: false,
// 			folder: 'premiere-auctioneers/docs',
// 		}
// 	)
// 	fs.unlinkSync(req.files.image.tempFilePath)
// 	return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
// }

// module.exports = {
// 	createProfile,
// 	getSingleUserProfile,
// 	uploadProfileImage,
// 	uploadDocumentImage,
// }
