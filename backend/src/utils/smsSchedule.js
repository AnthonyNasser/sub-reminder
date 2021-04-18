var moment = require('moment')
require('dotenv').config()

// !! -- !! -- !! URGENT URGENT URGENT URGENT URGENT !! -- !! -- !!
// In order to demo:
// set DemoMode to True!!!
var demoMode = false
apiKev = process.env.KEVINS_KEY

//Live is seperate from demo mode, for testing purposes
var live = true
api = live ? process.env.MESSAGEBIRD_API_KEY : process.env.MESSAGEBIRD_TEST_API_KEY

//This is the client for the call
var messagebird = require('messagebird')(demoMode ? apiKev : api)

//phone number is hardcoded since I'm the only recipent
//sms is a string to send
//date is a date object to be turned into a moment
//offSet is how long before the date they want to be reminded
function scheduleSms(recipentPhone, sms, sendDate, offSet) {
	if (!demoMode) {
		var reminderDT = moment(sendDate)
		console.log(
			'Would send this normally to ' +
				recipentPhone +
				' But sending to Gio bc we using the free trial :)'
		)
		hardcodedPhone = '14247046084'

		// Offset - How many hours before they want to recieve the sms
		var adjReminderDT = reminderDT.clone().subtract({ seconds: offSet })

		// Send scheduled message with MessageBird API
		messagebird.messages.create(
			{
				originator: 'SubRemind',
				recipients: [hardcodedPhone],
				scheduledDatetime: adjReminderDT.format(),
				body: sms,
			},
			(err, response) => {
				if (err) {
					// Request has failed
					console.log('Error occured while sending message!\n\n')
					console.log(err)
				} else {
					// Request was successful
					console.log(response)
				}
			}
		)
	} else {
		var reminderDT = moment(sendDate)
		console.log(
			'Would send this normally to ' + recipentPhone + " But sending to Kevin's Cell for demo"
		)
		hardcodedPhone = '16263839929'

		// Offset - How many hours before they want to recieve the sms
		var adjReminderDT = reminderDT.clone().subtract({ seconds: offSet })

		// Send scheduled message with MessageBird API
		messagebird.messages.create(
			{
				originator: 'SubRemind',
				recipients: [hardcodedPhone],
				scheduledDatetime: adjReminderDT.format(),
				body: sms,
			},
			(err, response) => {
				if (err) {
					// Request has failed
					console.log('Error occured while sending message!\n\n')
					console.log(err)
				} else {
					// Request was successful
					console.log(response)
				}
			}
		)
	}
}

//Example Call:
// scheduleSms("swssw","Hello My Guy",new Date("2021-04-17T23:59:53.272Z"),2)

module.exports = scheduleSms
