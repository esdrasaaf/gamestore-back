import { Router } from "express";
import { getGames, getSelectedGame } from "../controllers/games.controllers.js";

const router = Router();

router.get("/games", getGames)
router.get("/games/:gameId", getSelectedGame)

export default router;