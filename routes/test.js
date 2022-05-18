var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('test done!');
  res.render('Test', { condition: 'done!' });
});

module.exports = router;
