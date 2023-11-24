const express = require("express");
const router = express.Router();
const Book = require("../models/bookSchema");
const Reserved = require("../models/reservedSchema");
const ObjectId = require("mongoose").Types.ObjectId;


router.get("/view", async (req, res) => {
  try {
    let books = await Book.find({});
    console.log(books);
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Could not get books");
  }
});

router.post("/reserved", async (req, res) => {
  let reserved = new Reserved({
    USN: req.body.USN,
    by: req.body.by,
  });
  try {
    let check = await Reserved.find({ USN: req.body.USN }).then(function (models) {
      return models;
    }).catch(
      function (err) {
        console.log(err);
        return res.status(401).send("Could not reserve the book right now");

      }
    );
    if (check.length > 0) {
      return res.status(304).send("Could not reserve the book right now");
    }

    let savedReserve = await reserved.save();
    res.status(200).send(savedReserve);
  } catch (error) {
    console.log(error);
    return res.status(401).send("Could not reserve the book right now");
  }
});

router.get("/reserved/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let books = await Reserved.find({ by: new ObjectId(id) });
    let arr = await Promise.all(books.map(async (book) => {
      let temp = await Book.findOne({ USN: book.USN });
      return temp;
    }));

    console.log(arr);
    return res.status(200).send(arr);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }

});

module.exports = router;