/**
 * 用户子路由
 */
const express = require('express');
const User = require('../../controller/user/user');
const router = express.Router();

router.get('/createuser',User.createuser)

module.exports = router