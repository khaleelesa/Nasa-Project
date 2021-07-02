const express = require("express");
const router = express.Router();
const Media = require("../models/NasaMedia");

router.get("/images", (req, res) => {
  Media.find({}, function (data, err) {
    if (err) res.send(err);
    else res.send(data);
  });
});

router.post("/image", (req, res) => {
  const img = new Media({ ...req.body });
  img.save();
  res.end();
});

router.delete("/image/:id", async (req, res) => {
  Media.findByIdAndRemove(req.params.id, function (err) {
    if (err) res.send(err);
    else res.end();
  });
});

module.exports = router;
