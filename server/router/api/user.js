const express = require('express');
const userService = require('../../integration/user-services');
const router = express.Router();
const config = require('../../config');

/**
 * GET: a single users basic information
 */
router.get('/', async (req, res) => {
      const users = await userService.getUsers();
      return res.json(users);
    });

module.exports = router;
