const express = require("express");
const { serviceList } = require("../models/servicesList");

const breadCramps = {
  title: "Services",
  img: "service.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const breadCramps2 = {
  title: "Services",
  img: "service.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
    {
      prevLink: "/services",
      prevPage: "Services",
    },
  ],
};

const sidebarlist = [
  {
    name: "Marine and offshore Services",
    link: "serv-mos",
  },
  {
    name: "ENGINEERING",
    link: "serv-engi",
  },
  {
    name: "Maintenance and Reliability Engineering",
    link: "serv-mar",
  },
  {
    name: "Logistics / Procurement Services",
    link: "serv-lps",
  },
  {
    name: "Immigration and Hospitality",
    link: "serv-ih",
  },
];

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("services", {
    title: "Services || Acentia Energy",
    breadCramps,
    serviceList,
    layout: false,
  });
});

router.get("/serv-engi", (req, res, next) => {
  res.render("serv-eng", {
    title: "Services || Engineering",
    breadCramps: {
      title: "ENGINEERING",
      img: "service.png",
      prev: [
        {
          prevLink: "/",
          prevPage: "Home",
        },
        {
          prevLink: "/services",
          prevPage: "Services",
        },
      ],
      sidebar: sidebarlist,
      mainImg: "1.png",
    },
    layout: false,
  });
});

router.get("/serv-mos", (req, res, next) => {
  res.render("serv-mos", {
    title: "Services || MOS",
    breadCramps: {
      title: "Marine and offshore Services",
      img: "service.png",
      prev: [
        {
          prevLink: "/",
          prevPage: "Home",
        },
        {
          prevLink: "/services",
          prevPage: "Services",
        },
      ],
      sidebar: sidebarlist,
      mainImg: "4.png",
    },
    layout: false,
  });
});

router.get("/serv-ih", (req, res, next) => {
  res.render("serv-ih", {
    title: "Services || IH",
    breadCramps: {
      title: "Immigration and Hospitality",
      img: "service.png",
      prev: [
        {
          prevLink: "/",
          prevPage: "Home",
        },
        {
          prevLink: "/services",
          prevPage: "Services",
        },
      ],
      sidebar: sidebarlist,
      mainImg: "5.png",
    },
    layout: false,
  });
});

router.get("/serv-lps", (req, res, next) => {
  res.render("serv-lps", {
    title: "Services || LPS",
    breadCramps: {
      title: "Logistics / Procurement Services",
      img: "service.png",
      prev: [
        {
          prevLink: "/",
          prevPage: "Home",
        },
        {
          prevLink: "/services",
          prevPage: "Services",
        },
      ],
      sidebar: sidebarlist,
      mainImg: "3.png",
    },
    layout: false,
  });
});

router.get("/serv-mar", (req, res, next) => {
  res.render("serv-mar", {
    title: "Services || MAR",
    breadCramps: {
      title: "Maintenance and Reliability Engineering",
      img: "service.png",
      prev: [
        {
          prevLink: "/",
          prevPage: "Home",
        },
        {
          prevLink: "/services",
          prevPage: "Services",
        },
      ],
      sidebar: sidebarlist,
      mainImg: "2.png",
    },
    layout: false,
  });
});

module.exports = router;
