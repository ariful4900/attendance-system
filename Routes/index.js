const router = require('express').Router();
const authRoutes = require('./auth')

router.use('/api/p1/auth', authRoutes)

module.exports = router