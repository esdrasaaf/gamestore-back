import tokenValidationMD from "../middlewares/tokenValidaton.js";
import {Router} from "express";
import {postHistoric, getHistoric} from "../controllers/historic.controllers.js"

const router = Router();

router.use(tokenValidationMD)

router.post("/historic",postHistoric);
router.get("/historic", getHistoric)

export default router;