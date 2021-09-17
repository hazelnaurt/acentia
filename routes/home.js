const express = require("express");
const {
  homeSlider,
  homeOffer,
  homeAbout,
  homeVisionMission,
  homeServDesc,
  homeServices,
  project,
  projectList,
} = require("../models/home");
const { teams } = require("../models/teams");

const router = express.Router();
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Acentia Energy",
    homeSlider,
    homeOffer,
    homeAbout,
    homeVisionMission,
    homeServDesc,
    homeServices,
    project,
    projectList,
    teams,
    layout: false,
  });
});

module.exports = router;
