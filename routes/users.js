var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env;

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('users');
});

module.exports = router;
