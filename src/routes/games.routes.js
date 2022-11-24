import { Router } from "express";
import { getGames } from "../controllers/games.controllers.js";

const router = Router();

router.get("/games", getGames)

export default router;