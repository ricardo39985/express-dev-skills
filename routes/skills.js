const express = require('express');
const router= express.Router()


/* GET index. */
router.get('/', function(req, res, next) {
    res.render('skills/index', { title: 'Express' });
  });

  module.exports = router;
