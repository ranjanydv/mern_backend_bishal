const mongoose = require('mongoose')
const BiddingSchema = new mongoose.Schema({
	bidAmount: {
		type: Number,
		required: [true, 'Bid amount is required'],
		min: 100,
	},
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		required: true,
	},
	bidder: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	bidTime: {
		type: Date,
		default: Date.now(),
	},
})

// This changes the number of bids done in a particular product
BiddingSchema.statics.changeNoOfBids = async function (productId) {
	const prod = await this.model('Product').findById(productId)
	console.log('\nNew Bid On :' + prod.name + ' Of amount: ' + prod.lastBid)
	const result = await this.aggregate([
		{
			$match: { product: productId },
		},
		{
			$group: {
				_id: null,
				numOfBids: { $sum: 1 },
			},
		},
	])
	try {
		await this.model('Product').findOneAndUpdate(
			{ _id: productId },
			{
				numOfBids: result[0]?.numOfBids || 0,
			}
		)
	} catch (e) {
		console.error(e)
	}
}

BiddingSchema.post('save', async function () {
	await this.constructor.changeNoOfBids(this.product)
})

module.exports = mongoose.model('Bidding', BiddingSchema)
