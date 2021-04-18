const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const Subscription = require('../models/subscriptionModel')
const Reminder = require('../models/reminderModel')

// Get All Subscriptions
router.route('/').get(asyncHandler(async(req, res) => {
    const allSubscriptions = await Subscription.find({})
   	return res.status(200).json({
		success: true,
		message: 'Successfully grabbed all subscriptions',
		subscriptions: allSubscriptions,
	})
}))

// Create New Subscription
router.route('/newSubscription').post(
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
			console.log(subscription, 'subscription')
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
						res.status(200).json({
							success: true,
							message: 'Successfully initialized reminder',
							reminder: reminder,
						})
					}
				})
				return res.status(200).json({
					success: true,
					message: 'Successfully created subscription',
					subscription: subscription,
				})
			}
		})
	})
)

// Delete subscription
router.route('/:subscriptionId').delete(
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
	asyncHandler(async (req, res) => {
		const { subName, yearlyFrequency, price, type } = req.body
		Subscription.findByIdAndUpdate(req.params.subscriptionId, req.body, (err, newSubscription) => {
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
		})
	})
)

module.exports = router
