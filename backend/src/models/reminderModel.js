const mongoose = require('mongoose')

const reminderSchema = mongoose.Schema(
	{
		subscription: {
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Subscription',
			},
		},
		nextRenewal: {
			type: Date,
			required: true,
		},
		user: {
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
			username: String,
		},
	},
	{
		timestamps: true,
	}
)

// remind user

const Reminder = mongoose.model('Reminder', reminderSchema)
module.exports = Reminder