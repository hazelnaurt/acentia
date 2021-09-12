import express, { Request, Response, NextFunction } from "express";
import { serviceList } from "../models/servicesList";

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

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("services", {
    title: "Services || Acentia Energy",
    breadCramps,
    serviceList,
    layout: false,
  });
});

router.get("/serv-engi", (req: Request, res: Response, next: NextFunction) => {
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
    },
    layout: false,
  });
});

router.get("/serv-mos", (req: Request, res: Response, next: NextFunction) => {
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
    },
    layout: false,
  });
});

router.get("/serv-ih", (req: Request, res: Response, next: NextFunction) => {
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
    },
    layout: false,
  });
});

router.get("/serv-lps", (req: Request, res: Response, next: NextFunction) => {
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
    },
    layout: false,
  });
});

router.get("/serv-mar", (req: Request, res: Response, next: NextFunction) => {
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
    },
    layout: false,
  });
});

export default router;
