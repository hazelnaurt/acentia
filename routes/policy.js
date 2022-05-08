const express = require("express");
const { teams } = require("../models/teams");

const breadCramps = {
  title: "Policy",
  img: "3.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/Policy", (req, res, next) => {
  res.render("policy", {
    title: "Policy || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

module.exports = router;
