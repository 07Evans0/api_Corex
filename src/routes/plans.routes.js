const express = require("express");
const router = express.Router();
const plansController = require("../controllers/plans.controller");

router.get('/plans', plansController.getAllPlans);

module.exports = router;