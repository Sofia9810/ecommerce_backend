const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");

router.post("/", userController.store);
router.use((req, res, next) => {console.log(req.headers); next()})
router.use(
  checkJwt({ secret: process.env.SECRET_TOKEN, algorithms: ["HS256"]})
);

router.get("/", userController.index);
router.get("/:id", userController.show);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
