const express = require("express");
const router = express.Router();
const Book = require("../models/bookSchema");
const Reserved = require("../models/reservedSchema");

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
    status: req.body.status,
    by: req.body.userid,
  });
  try {
    let savedReserve = await reserved.save();
    res.status(200).send(savedReserve);
  } catch (error) {
    return res.status(401).send("Could not reserve the book right now");
  }
});

module.exports = router;