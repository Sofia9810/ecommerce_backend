const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const authRouter = require("./authRoutes");
const adminRouter = require("./adminRoutes");
const categoryRouter = require("./categoryRoutes");
const orderRouter = require("./orderRoutes");
const productRouter = require("./productRoutes");
const isAdmin = require("../middlewares/isAdmin");
const { expressjwt: checkJwt } = require("express-jwt");

router.use("/tokens", authRouter);
router.use("/users", userRoutes);

router.use(
  "/admins",
  checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"] }),
  isAdmin,
  adminRouter
);
router.use("/categories", categoryRouter);
router.use("/orders",  checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"] }), orderRouter);
router.use("/products", productRouter);

module.exports = router;
