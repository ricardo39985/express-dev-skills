const express = require("express");
const router = express.Router();
const peopleCtrl = require("../controllers/people");

/* GET index. */
router.get("/", peopleCtrl.index);
router.get("/new", peopleCtrl.new);
router.get("/:id", peopleCtrl.show);
router.get("/edit/:id", peopleCtrl.edit);
router.post("/", peopleCtrl.create);
router.delete('/:id', peopleCtrl.delete)
router.get("/:id/edit", peopleCtrl.edit);
router.put("/:id", peopleCtrl.update);



module.exports = router;
