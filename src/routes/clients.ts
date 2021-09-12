import express, { Request, Response, NextFunction } from "express";
import { teams } from "../models/teams";

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

router.get("/clients", (req: Request, res: Response, next: NextFunction) => {
  res.render("clients", {
    title: "Clients || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

export default router;
