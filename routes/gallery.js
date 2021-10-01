const express = require("express");

const breadCramps = {
  title: "Gallery",
  img: "3.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/gallery", (req, res, next) => {
  res.render("gallery", {
    title: "Gallery || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

module.exports = router;
