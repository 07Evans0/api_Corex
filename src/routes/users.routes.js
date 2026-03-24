const express = require("express");
const router = express.Router();
const authRequired = require("../middlewares/auth.middleware");
const usersController = require("../controllers/users.controller");

// Todas as rotas abaixo exigem o Token no Header
router.use(authRequired);

router.get("/me", usersController.me);
router.put("/me", usersController.updateUser);
router.delete("/me", usersController.deleteUser);

module.exports = router;