const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.write("Hello world!");
  res.end();
});

module.exports = router;
