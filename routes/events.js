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

router.get("/", (req, res, next) => {
  res.render("events", {
    title: "Events || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

router.get("/breakfast-meeting", (req, res, next) => {
  res.render("event-breakfast", {
    title: "Events || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

router.get("/carreer-guidance-conference", (req, res, next) => {
  res.render("event-cgc", {
    title: "Events || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

router.get("/coporate-social-responsibility", (req, res, next) => {
  res.render("event-csr", {
    title: "Events || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

router.get("/visit-to-the-new-inuagurated-osu-mantse", (req, res, next) => {
  res.render("event-vni", {
    title: "Events || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

module.exports = router;
