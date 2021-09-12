import express, { Request, Response, NextFunction } from "express";
import { teams } from "../models/teams";

const breadCramps = {
  title: "Policy",
  img: "3.png",
  prev: [
    {
      prevLink: "/",
      prevPage: "Home",
    },
  ],
};

const router = express.Router();

router.get("/Policy", (req: Request, res: Response, next: NextFunction) => {
  res.render("Policy", {
    title: "Policy || Acentia Energy",
    breadCramps,
    layout: false,
  });
});

export default router;
