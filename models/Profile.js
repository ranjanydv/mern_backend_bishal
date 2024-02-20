// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const UserSchema = Schema(
// 	{
// 		user: {
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: 'User',
// 		},
// 		website: {
// 			type: String,
// 		},
// 		location: {
// 			type: String,
// 		},
// 		address: {
// 			type: String,
// 		},
// 		city: {
// 			type: String,
// 		},
// 		state: {
// 			type: String,
// 		},
// 		zip: {
// 			type: Number,
// 		},
// 		country: {
// 			type: String,
// 			enum: {
// 				values: ['Nepal', 'Others'],
// 				message: '{VALUE} is not supported',
// 			},
// 			default: 'Nepal',
// 		},
// 		status: {
// 			type: String,
// 			required: [true, 'Status is required'],
// 			enum: {
// 				values: ['verified', 'unverified'],
// 				message: '{VALUE} is not supported',
// 			},
// 			default: 'unverified',
// 		},
// 		profilePic: {
// 			type: String,
// 			default: '/uploads/user.jpg',
// 		},
// 		document: {
// 			typeof: String,
// 			default: '/uploads/doc.jpg',
// 		},
// 		contactNumber: {
// 			type: String,
// 			required: false,
// 			max: 15,
// 		},
// 		favouriteListing: [
// 			{
// 				productId: {
// 					type: Schema.Types.ObjectId,
// 					ref: 'Product',
// 				},
// 				savedAt: {
// 					type: Date,
// 					default: Date.now,
// 				},
// 			},
// 		],
// 	},
// 	{
// 		timestamps: true,
// 		toJSON: { virtuals: true },
// 		toObject: { virtuals: true },
// 	}
// )

// // This links the profile model to the user model
// UserSchema.virtual('user', {
// 	ref: 'User',
// 	localField: '_id',
// 	foreignField: 'user',
// 	justOne: true,
// })
// module.exports = Profile = mongoose.model('Profile', UserSchema)
