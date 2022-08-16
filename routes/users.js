var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.getUserList);
router.get('/:userId', userController.getUserById);

module.exports = router;
