const { Router } = require("express");
const productsController = require("../controller/productsController");

const router = Router();

router.get("/", productsController.getAllProducts);
router.get("/:name", productsController.getProduct);
router.post("/", productsController.addProduct);

module.exports = router;
