const express = require("express");
const router = express.Router();
const peopleCtrl = require("../controllers/people");

/* GET index. */
router.get("/", peopleCtrl.index);
router.get("/:id", peopleCtrl.show);
router.get("/edit/:id", peopleCtrl.edit);

module.exports = router;
