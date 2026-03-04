const express = require("express");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes");
const plansRoutes = require("./routes/plans.routes");
const usersRoutes = require("./routes/users.routes");
const errorMiddleware = require("./middlewares/error.middleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);
app.use("/plans", plansRoutes);
// Middleware de erro deve ser o último
app.use(errorMiddleware);

module.exports = app;