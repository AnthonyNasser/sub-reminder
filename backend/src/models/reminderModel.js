const mongoose = require('mongoose')
const Subscription = require('../models/subscriptionModel')

const reminderSchema = mongoose.Schema(
	{
		subscription: {
			type: Subscription.schema,
			required: true,
		},
		nextRenewal: {
			type: Date,
			required: false,
		},
	},
	{
		timestamps: true,
	}
)

const Reminder = mongoose.model('Reminder', reminderSchema)
module.exports = Reminder