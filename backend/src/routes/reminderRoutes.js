const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const Reminder = require('../models/reminderModel')
const Subscription = require('../models/subscriptionModel')

// Get All Reminders
router.route('/').get(asyncHandler(async(req, res) => {
    const allReminders = await Reminder.find({})
    res.json(allReminders)
    console.log(allReminders)
}))

// Create New Reminder
router.route('/:subscriptionId').post(asyncHandler(async(req, res) => {
    // find subscription to attach to reminder
    Subscription.findById(req.params.subscriptionId, (err, subscription) => {
        if (err) {
            res.status(404)
            res.redirect('/reminders')
        } else {
            Reminder.create(req.body.nextRenewal, (err, reminder) => {
                if (err) {
                    res.status(404)
                    res.redirect('/reminders')
                } else {
                    // associate reminder with subsciption
                    reminder.subscription.id = subscription._id

                    // associate reminder with user
                    reminder.user.id = req.user._id
                    reminder.user.username = req.user.username
                    reminder.save()

                    // associate user with reminder
                    req.user.reminders.push(reminder)
                    req.user.save()

                    res.redirect('/reminders')
                }
            })
        }
})}))

// Delete Reminder
router.route('/:reminderId').delete(asyncHandler(async(req, res) => {
    Reminder.findByIdAndDelete(req.params.reminderId, (err, reminder) => {
        if (err) {
            res.status(404)
            res.redirect('/')
        } else {
            res.send(reminder) // temp
            res.send('Successfully deleted Reminder!')
        }
    })
}))

// Find specific Reminder
router.route('/:reminderId').get(asyncHandler(async(req, res) => {
    const reminder = await Reminder.findById(req.params.reminderId)
    if (err) {
        res.status(404)
        throw new Error('Reminder not found')
    } else {
        res.json(reminder)
        res.send(reminder) // temp
    }
}))

// Update reminder
router.route('/:reminderId').put(asyncHandler(async(req, res) => {
    Reminder.findByIdAndUpdate(req.params.reminderId, req.body, (err, updatedReminder) => {
        if (err) {
            res.status(404)
            throw new Error('Reminder not found')
        } else {
            res.send(updatedReminder)
        }
    })
}))

module.exports = router