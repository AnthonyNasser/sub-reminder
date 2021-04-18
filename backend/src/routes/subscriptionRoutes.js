const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const Subscription = require('../models/subscriptionModel')
const Reminder = require('../models/reminderModel')
const User = require('../models/userModel')
const userAuth = require('../middleware/userAuth').userAuth

// Get All Subscriptions
router.route('/').get(
	userAuth,
	asyncHandler(async (req, res) => {
		const allSubscriptions = await Subscription.find({})
		return res.status(200).json({
			success: true,
			message: 'Successfully grabbed all subscriptions',
			subscriptions: allSubscriptions,
		})
	})
)

// Create New Subscription
router.route('/newSubscription').post(
	userAuth,
	asyncHandler(async (req, res) => {
		const { subName, yearlyFrequency, price, type } = req.body

		// Guard Clauses
		if (!subName) {
			res.status(400).json({
				success: false,
				message: 'Invalid subscription name',
			})
			return
		}
		if (!yearlyFrequency) {
			res.status(400).json({
				success: false,
				message: 'Invalid subscription frequency',
			})
			return
		}
		if (!price) {
			res.status(400).json({
				success: false,
				message: 'Invalid price name',
			})
			return
		}
		if (!type) {
			res.status(400).json({
				success: false,
				message: 'Invalid type',
			})
			return
		}

		Subscription.create(req.body, (err, subscription) => {
			subscription = req.body
			if (err) {
				return res.status(400).json({
					success: false,
					message: 'Failed to create subscription',
				})
			}
			if (subscription) {
				const reminderObject = { subscription: subscription }
				Reminder.create(reminderObject, (err, reminder) => {
					if (err) {
						console.log('Error', err)
						return res.status(400).json({
							success: false,
							message: 'Error creating initial reminder',
						})
					}
					if (reminder) {
						User.findById(req.userId, (err, foundUser) => {
							if (err) {
								return res.status(400).json({
									success: false,
									message: 'User not found'
								})
							}
							if (foundUser) {
								foundUser.reminders.push(reminder)
								foundUser.markModified("reminders")
								foundUser.save()
								return res.status(200).json({
									success: true,
									message: 'Successfully initialized reminder',
									reminder: reminder,
								})
							}
						})
					
					}
				})
			}
		})
	})
)

// Delete subscription
router.route('/:subscriptionId').delete(
	userAuth,
	asyncHandler(async (req, res) => {
		Subscription.findByIdAndDelete(req.params.subscriptionId, (err, subscription) => {
			if (err) {
				res.status(404).json({
					success: false,
					message: 'Could not delete Subscription',
				})
			}
			if (subscription) {
				res.status(200).json({
					success: true,
					message: 'Successfully deleted Subscription',
				})
			}
		})
	})
)

// Find specific Subscription
router.route('/:subscriptionId').get(
	userAuth,
	asyncHandler(async (req, res) => {
		Subscription.findById(req.params.subscriptionId, (err, subscription) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: 'Could not find subscription',
				})
			}
			if (subscription) {
				return res.status(200).json({
					success: true,
					message: 'Succesfully found subscription',
				})
			}
		})
	})
)

// Edit Subscription
router.route('/:subscriptionId').put(
	userAuth,
	asyncHandler(async (req, res) => {
		const { subName, yearlyFrequency, price, type } = req.body
		Subscription.findByIdAndUpdate(
			req.params.subscriptionId,
			req.body,
			(err, newSubscription) => {
				if (err) {
					return res.status(404).json({
						success: false,
						message: 'Could not update subscription',
					})
				}
				if (newSubscription) {
					return res.status(200).json({
						success: true,
						message: 'Succesfully updated subscription',
					})
				}
			}
		)
	})
)

module.exports = router
