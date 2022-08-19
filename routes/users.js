var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.getUserList);
router.get('/create_user', userController.createUserById);
router.get('/:userId', userController.getUserById);
router.get('/:userId/edit', userController.editUserById);
router.post('/:userId/edit', userController.editUser);

module.exports = router;
