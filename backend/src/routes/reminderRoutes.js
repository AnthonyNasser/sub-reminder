const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const Reminder = require('../models/reminderModel')
const setUpReminder = require('../utils/smsSchedule')
const User = require('../models/userModel')
const userAuth = require('../middleware/userAuth').userAuth

// Get All Reminders
router.route('/').get(
	userAuth,
	asyncHandler(async (req, res) => {
		const allReminders = await Reminder.find({})
		return res.status(200).json({
			success: true,
			message: 'Successfully grabbed all reminders',
			reminders: allReminders,
		})
	})
)

// Delete Reminder
router.route('/:reminderId').delete(
	userAuth,
	asyncHandler(async (req, res) => {
		Reminder.findByIdAndDelete(req.params.reminderId, (err, reminder) => {
			if (err) {
				console.log(err)
				return res.status(404).json({
					success: false,
					message: 'Failed to delete reminder',
				})
			}
			if (reminder) {
				return res.status(200).json({
					success: true,
					message: 'Succesfully deleted reminder',
				})
			}
		})
	})
)

// Find specific Reminder
router.route('/:reminderId').get(
	userAuth,
	asyncHandler(async (req, res) => {
		const reminder = await Reminder.findById(req.params.reminderId, (err, reminder) => {
			if (err) {
				console.log(err)
				return res.status(404).json({
					success: false,
					message: 'Reminder not found',
				})
			}
			if (reminder) {
				return res.status(200).json({
					success: true,
					message: 'Reminder found',
					reminder: reminder,
				})
			}
		})
	})
)

// Edit Reminder
router.route('/:reminderId').put(
	userAuth,
	asyncHandler(async (req, res) => {
		const { nextRenewal } = req.body
		if (!nextRenewal) {
			res.status(400).json({
				success: false,
				message: 'Invalid next renewal date',
			})
			return
		}
		let newRenewalDate = Date.parse(nextRenewal.toString())
		if (isNaN(newRenewalDate)) {
			res.status(400).json({
				success: false,
				message: 'Invalid next renewal date',
			})
		}

		newRenewalDate = new Date(nextRenewal.toString())

		Reminder.findByIdAndUpdate(req.params.reminderId, req.body, (err, newReminder) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: 'Could not update Reminder',
				})
			}
			if (newReminder) {
				User.findById(req.userId, (err, foundUser) => {
					if (err) {
						return res.status(400).json({
							success: false,
							message: 'User Not found',
						})
					}
					if (foundUser) {
						setUpReminder(
							foundUser.phoneNumber,
							'Hello ' +
								foundUser.firstName +
								' ' +
								foundUser.lastName +
								', this is your SubReminder to pay $' +
								newReminder.subscription.price +
								' for ' +
								newReminder.subscription.subName +
								' on ' +
								newRenewalDate.getMonth() +
								'-' +
								newRenewalDate.getDay() +
								'-' +
								newRenewalDate.getFullYear() +
								' .Visit https://url.com to manage your notifications. Later!',
							newRenewalDate,
							0 //Offset of 24 hours
						)
					}
				})

				return res.status(200).json({
					success: true,
					message: 'Succesfully updated Reminder',
				})
			}
		})
	})
)

module.exports = router
