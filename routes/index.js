var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', (req, res) => {
  res.render('login');
})

router.get('/logout', (req, res) => {
  res.send('loggingout');
})

router.get('/google', (req, res) => {
  res.send('logging in with google');
})

module.exports = router;
