const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Reminder = require('../models/reminderModel')

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		phoneNumber: {
			type: Number,
			maxLength: 11,
			minLength: 10,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		reminders: { type: [Reminder.schema] },
	},
	{
		timestamps: true,
	}
)

// Match encrypted password
userSchema.methods.matchPassword = async function(enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}

	const salt = await bcrypt.genSalt(10)
	this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)
module.exports = User
