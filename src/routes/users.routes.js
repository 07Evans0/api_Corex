const express = require("express");
const router = express.Router();

const authRequired = require("../middlewares/auth.middleware");
const usersController = require("../controllers/users.controller");

router.get("/me", authRequired, usersController.me);

module.exports = router;
