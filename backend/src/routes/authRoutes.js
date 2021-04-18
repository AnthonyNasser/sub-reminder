const express = require('express')
const router = express()
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')


// Auth (Login) Route
router.route('/login').post(asyncHandler(async (req, res) => {
    const { email, password } = req.body

	if (!email) {
		res.status(400).json({
			success: false,
			message: 'Invalid email',
		})
		return
	}
	if (!password) {
		res.status(400).json({
			success: false,
			message: 'Invalid password',
		})
		return
	}

	const user = await User.findOne({ email }, (err, user) => {
		if (err) {
			res.status(500)
			throw new Error('No email found')
		}
	})
    
    if (user && (await user.matchPassword(password))) { 
        return res.status(200).json({
			success: true,
			message: 'Login successful',
			user: user,
		})
    } else {
        return res.status(401).json({
			success: false,
			message: 'User Authorization failed',
		})
    }
}))

// Register Route
router.route('/register').post(asyncHandler(async (req, res) => {
	const { firstName, lastName, username, email, phoneNumber, password, confPassword } = req.body

	// Guard Clauses
	if (!firstName) {
		res.status(400).json({
			success: false,
			message: 'Invalid firstName',
		})
		return
	}
	if (!lastName) {
		res.status(400).json({
			success: false,
			message: 'Invalid lastName',
		})
		return
	}
	if (!username) {
		res.status(400).json({
			success: false,
			message: 'Invalid username',
		})
		return
	}
	if (!email) {
		res.status(400).json({
			success: false,
			message: 'Invalid email',
		})
		return
	}
	if (!phoneNumber) {
		res.status(400).json({
			success: false,
			message: 'Invalid phoneNumber',
		})
		return
	}
	if (!password) {
		res.status(400).json({
			success: false,
			message: 'Invalid password',
		})
		return
	}
	if (!confPassword) {
		res.status(400).json({
			success: false,
			message: 'Invalid password',
		})
		return
	}

	// Check if User already exists by email
	const userExists = await User.findOne({ email }, (err, user) => {
		if (err) {
			return res.status(500).json({
				success: false,
				message: 'No email found',
			})
		}
	})

	if (userExists) {
		return res.status(400).json({
			success: false,
			message: 'User with that email already exists',
		})
	}

	if (password !== confPassword) {
		return res.status(400).json({
			success: false,
			message: 'Passwords do not match',
		})
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
		return res.status(201).json({
			success: true,
			message: 'User successfully registered',
			user: user,
		})
	} else {
		return res.status(500).json({
			success: false,
			message: 'Error registering User',
		})
	}
}))

module.exports = router