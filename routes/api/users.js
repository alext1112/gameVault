const express = require('express');
// To use express router
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route  POST api/users
// @desc   Register User
// @access Public -> doesn't require a token
router.post(
	'/',
	[check('name', 'Name is required').not().isEmpty()],
	(req, res) => {
		console.log(req.body);
		res.send('User route');
	}
);

module.exports = router;
