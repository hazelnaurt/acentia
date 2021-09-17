const express = require("express");
const { teams } = require("../models/teams");

const breadCramps = {
  title: "Clients",
  img: "3.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/clients", (req, res, next) => {
  res.render("clients", {
    title: "Clients || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

module.exports = router;
