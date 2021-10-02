const express = require("express");

const breadCramps = {
  title: "Events",
  img: "3.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/events", (req, res, next) => {
  res.render("gallery", {
    title: "Events || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

module.exports = router;
