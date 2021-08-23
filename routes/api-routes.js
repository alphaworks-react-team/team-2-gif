const router = require("express").Router();
require("dotenv").config();

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});

module.exports = router;
