const express = require("express");
const { teams } = require("../models/teams");

const breadCramps = {
  title: "About Us",
  img: "about.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/about", (req, res, next) => {
  res.render("about", {
    title: "About Us || Acentia Energy",
    teams,
    breadCramps,
    layout: false,
  });
});

module.exports = router;
