const express = require('express');
// To use express router
const router = express.Router();

// @route  GET api/posts
// @desc   Test route
// @access Public -> doesn't require a token
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;