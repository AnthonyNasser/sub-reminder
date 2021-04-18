const mongoose = require('mongoose')

const reminderSchema =  mongoose.Schema(
    {
        subscription : {
            type: String,
            required: true,
            trim: true
        },
        nextDate : {
            type: Date,
            required: true
        },
        nextTime : {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        frequencyPerYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const Reminder = mongoose.model('Reminder', reminderSchema)
module.exports = Reminder