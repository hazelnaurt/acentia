import express, { Request, Response, NextFunction } from "express";
import { teams } from "../models/teams";

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

router.get("/contact", (req: Request, res: Response, next: NextFunction) => {
  res.render("contact", {
    title: "Contact || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

export default router;
