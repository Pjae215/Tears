var router = require("express").Router();
var bController = require("../controllers/");

// Matches with "/api/user"
router.route("/")
  .get(bController.findAll)
  .post(bController.create);

// Matches with email
router
  .route("/:email")
  .get(bController.findByEmail)
  .put(bController.update)
  .delete(bController.remove);

module.exports = router;