var db = require("../models/index.js");

exports.showBaizis = function(req, res) {
  db.Baizi.find()
    .then(function(baizis) {
      res.json(baizis);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.createBaizi = function(req, res) {
  db.Baizi.create(req.body)
    .then(function(newBaizi) {
      res.status(201).json(newBaizi);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.showBaizi = function(req, res) {
  db.Baizi.findById(req.params.baiziid)
    .then(function(foundBaizi) {
      res.json(foundBaizi);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.updateBaizi = function(req, res) {
  db.Baizi.findByIdAndUpdate(req.params.baiziid, req.body, { new: true })
    .then(function(updatedBaizi) {
      res.json(updatedBaizi);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.deleteBaizi = function(req, res) {
  db.Baizi.findByIdAndRemove(req.params.baiziid)
    .then(function() {
      res.json({ message: "Baizi is deleted." });
    })
    .catch(function(err) {
      res.send(err);
    });
};
