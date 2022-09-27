const express = require('express');
const router= express.Router()
const skillsCtrl = require('../controllers/skills')


/* GET index. */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/edit/:id', skillsCtrl.edit);


  module.exports = router;
