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
router.route('/').post(
	asyncHandler(async (req, res) => {
		const { subName, yearlyFrequency, price } = req.body
		Subscription.create(req.body, (err, subscription) => {
			subscription = req.body
			console.log(subscription, 'subscription')
			if (err) {
				return res.status(400).json({
					success: false,
					message: 'Failed to create subscription'
				})
			} 
			if (subscription) {
				Reminder.create({
					
				})
				return res.status(200).json({
					success: true,
					message: 'Successfully created subscription',
					subscription: subscription
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
				res.status(404)
				res.redirect('/')
			} else {
				res.send(subscription) // temp
				res.send('Successfully deleted subscription')
			}
		})
	})
)

// Find specific Subscription
router.route('/:subscriptionId').get(
	asyncHandler(async (req, res) => {
		const subscription = await subscription.findById(req.params.subscriptionId)
		if (err) {
			res.status(404)
			throw new Error('Subscription not found')
		} else {
			res.json(subscription)
			res.send(subscription) // temp
		}
	})
)

module.exports = router
