var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');


router.get('/', function(req, res, next) {
    res.render('user/edit', {title: 'hi'});
  });

// router.get('/:userId', userController.getUserById);

module.exports = router;