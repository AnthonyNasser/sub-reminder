const express = require('express')
const app = express()

const dotenv = require('dotenv')
const connectMongo = require('./config/Mongo.js')

const subscriptionRoutes = require('./routes/subscriptionRoutes')
const reminderRoutes = require('./routes/reminderRoutes')
const authRoutes = require('./routes/authRoutes')

dotenv.config()
connectMongo()

app.use(express.json())

// middleware to seek currentUser
app.use((req, res, next) => {
	res.locals.currentUser = req.user
	res.locals.session = req.session
	next()
})

app.use('/api/v1/subscriptions', subscriptionRoutes)
app.use('/api/v1/reminders', reminderRoutes)
app.use('/api/v1', authRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    console.log(`${err ? err : `Running on port ${PORT}`}`),
)