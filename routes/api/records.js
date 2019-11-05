const router = require("express").Router();
const appController = require("../../controllers/appControllers.js");

// Matches with "/api/apps"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/apps/:email"
router
  .route("/:email")
  .get(appController.findByEmail)
  .put(appController.update)
  .delete(appController.remove);

module.exports = router;