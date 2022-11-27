import { Router } from "express";
import { postCart, getCart} from "../controllers/cart.controllers.js";
import tokenValidationMD from "../middlewares/tokenValidaton.js";

const router = Router();
router.use(tokenValidationMD)

router.post("/cart", postCart)
router.get("/cart", getCart)

export default router;