const express = require("express");
const router = express.Router();
const employeesCtrl = require("../controllers/employees");

router.get("/", employeesCtrl.index);
router.get("/new", employeesCtrl.new);
router.get("/:id", employeesCtrl.show);
router.get("/edit/:id", employeesCtrl.edit);
router.post("/", employeesCtrl.create);
router.delete('/:id', employeesCtrl.delete)
router.get("/:id/edit", employeesCtrl.edit);
router.put("/:id", employeesCtrl.update);

module.exports = router;
