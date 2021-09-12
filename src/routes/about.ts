import express, { Request, Response, NextFunction } from "express";
import { teams } from "../models/teams";

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

router.get("/about", (req: Request, res: Response, next: NextFunction) => {
  res.render("about", {
    title: "About Us || Acentia Energy",
    teams,
    breadCramps,
    layout: false,
  });
});

export default router;
