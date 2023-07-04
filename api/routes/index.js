const { Router } = require("express");
const productRouter = require("./productRouter");
const brandsRouter = require("./brandsRouter");

const router = Router();

router.use("/products", productRouter);
router.use("/brands", brandsRouter);

module.exports = router;
