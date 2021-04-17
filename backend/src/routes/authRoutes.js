const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')


// Auth (Login) Route
router.route('/login').post(asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})
    
    if (user && (await user.matchPassword(password))) { 
		res.status(201).json({
			_id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
			username: user.username,
			email: user.email,
			phoneNumber: user.phoneNumber,
			token: generateToken(user._id),
		})
        res.send(user)
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password.')
    }
}))

// Register Route
router.route('/register').post(asyncHandler(async (req, res) => {
    const { firstName, lastName, username, email, phoneNumber, password, } = req.body

    // Check if User already exists by email
    const userExists = await User.findOne({ email })
    if (userExists) {
		res.status(400)
		throw new Error('User already exists.')
	}

    // Continue with creation if they don't
	const user = await User.create({
        firstName,
        lastName,
		username,
		email,
		phoneNumber,
		password,
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
			username: user.username,
			email: user.email,
			phoneNumber: user.phoneNumber,
			token: generateToken(user._id),
		})
        res.send(user)
	} else {
		res.status(400)
		throw new Error('Problem with User data')
	}
}))

module.exports = router