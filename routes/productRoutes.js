const express = require("express");
const router = express.Router();
const { Product } = require("../models/index");
const productController = require("../controllers/productController");
const isAdmin = require("../middlewares/isAdmin");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"] }),
  isAdmin,
  productController.store
);
router.patch("/:id", productController.update);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"] }),
  isAdmin,
  productController.destroy
);

module.exports = router;
