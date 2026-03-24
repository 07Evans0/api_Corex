const express = require("express");
const router = express.Router();
const plansController = require("../controllers/plans.controller");

router.get("/", plansController.getAllPlans);
router.post("/", plansController.createPlan);

router.get("/:id", plansController.getPlanById);
router.put("/:id", plansController.updatePlan);
router.delete("/:id", plansController.deletePlan);

module.exports = router;