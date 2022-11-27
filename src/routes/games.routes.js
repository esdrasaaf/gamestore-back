import { Router } from "express";
import { getGames, getSelectedGame } from "../controllers/games.controllers.js";
import tokenValidationMD from "../middlewares/tokenValidaton.js";

const router = Router();
router.use(tokenValidationMD)

router.get("/games", getGames)
router.get("/games/:gameId", getSelectedGame)

export default router;