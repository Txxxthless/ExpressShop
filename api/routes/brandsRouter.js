const { Router } = require("express");
const brandsController = require("../controller/brandsController");

const router = Router();

router.get("/", brandsController.getAllBrands);
router.get("/:name", brandsController.getBrand);
router.post("/", brandsController.addBrand);

module.exports = router;
