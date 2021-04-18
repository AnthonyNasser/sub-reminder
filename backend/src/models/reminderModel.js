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
			default: new Date(),
		},
	},
	{
		timestamps: true,
	}
)

const Reminder = mongoose.model('Reminder', reminderSchema)
module.exports = Reminder

//"Hello NAME this is your SubReminder for Netflix: you need to pay $54 on 4/4/4! Visit https://url.com to configure reminders"
