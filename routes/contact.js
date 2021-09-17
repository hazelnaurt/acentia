const express = require("express");
const { teams } = require("../models/teams");

const breadCramps = {
  title: "Contact",
  img: "contact.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.render("contact", {
    title: "Contact || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

module.exports = router;
