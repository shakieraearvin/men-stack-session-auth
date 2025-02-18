const express = require("express");
const router = express.Router();

// define routes here
router.get("/sign-up", (req, res) => {
    res.render("auth/sign-up.ejs");
  });
  

module.exports = router;
