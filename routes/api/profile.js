const express = require('express');
// To use express router
const router = express.Router();

// @route  GET api/profile
// @desc   Test route
// @access Public -> doesn't require a token
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;