var router = require("express").Router();
var ProfileRoutes = require("./routes.js.js.js");

//PRofile
router.use("/profile", ProfileRoutes);

module.exports = router;
