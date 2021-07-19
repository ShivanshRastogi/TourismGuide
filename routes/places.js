const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

let router = express.Router();

const places = require("../models/places");

router.use(cors());
router.use(express.json());

router
  .route("/")
  .post((req, res) => {
    const placesObj = new places({
        _id: new mongoose.Types.ObjectId(),
        place : req.body.place,
        name : req.body.name,
        review : req.body.review
      });
      placesObj
        .save()
        .then((result) => {
          console.log(result);
          res.status(201).json({
            success: true,
            message: "Record Created Successfully",
            createdRecord: result,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            message: "Record Creation Unsuccessful",
            error: error,
          });
        });
  })
  .get((req, res) => {
    places.find()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;
