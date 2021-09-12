import express, { Request, Response, NextFunction } from "express";
import {
  homeSlider,
  homeOffer,
  homeAbout,
  homeVisionMission,
  homeServDesc,
  homeServices,
  project,
  projectList,
} from "../models/home";
import { teams } from "../models/teams";

const router = express.Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
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

export default router;
