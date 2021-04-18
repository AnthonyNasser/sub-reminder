const mongoose = require('mongoose')

const subscriptionSchema = mongoose.Schema(
	{
		subName: {
			type: String,
			required: true,
			trim: true,
		},
		yearlyFrequency: {
			type: Number,
			default: 12,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			default: 'Standard',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Subscription = mongoose.model('Subscription', subscriptionSchema)
module.exports = Subscription
