const router = require('express').Router();
const authRoutes = require('./auth')

router.use('/api/p1/auth', authRoutes)

module.exports = router


//Student
//POST: user register [public]
//POST: user login [public]
//PATCH: user profile update [private]
//PATCH: profile picture update [private]
//PUT: change user password [private]
//GET: See timeSheet [private]
//GET: attendance [private]
//GET: attendance status [private]


// Admin
//GET: all user [private]
//POST: create a user [private]
//PATCH: update user info [private]
//DELETE: delete user [private]
//GET: Single user info [private]
//GET: profile
//POST: profile
//PATCH: profile info update
//DELETE: delete profile
//GET: Single Profile
//GET: timeSheet of userID
//GET: timeSheet state
//GET: attendance enable
//GET: attendance disable
