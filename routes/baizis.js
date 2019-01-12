var express = require("express"),
  router = express.Router(),
  db = require("../models"),
  helpers = require("../helpers/baizis");

router
  .route("/")
  .get(helpers.showBaizis)
  .post(helpers.createBaizi);

router
  .route("/:baiziid")
  .get(helpers.showBaizi)
  .put(helpers.updateBaizi)
  .delete(helpers.deleteBaizi);

module.exports = router;
