var router = require("express").Router();
var userRoutes = require("./routes");

//PRofile
router.use("/", userRoutes);

module.exports = router;
