const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const Subscription = require('../models/subscriptionModel')

// Get All Subscriptions
router.route('/').get(
	asyncHandler(async (req, res) => {
		const allSubscriptions = await Subscription.find({})
		res.json(allSubscriptions)
		console.log(allSubscriptions)
	})
)

// Create New Subscription
router.route('/').post(
	asyncHandler(async (req, res) => {
		Subscription.create(req.body, (err, subscription) => {
			if (err) {
				res.status(401)
				res.send('There was an error creating Subscription')
			} else {
				res.send(subscription)
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
