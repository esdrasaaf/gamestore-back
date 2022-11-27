import { Router } from "express";
import { postCart, getCart, deleteCart} from "../controllers/cart.controllers.js";
import tokenValidationMD from "../middlewares/tokenValidaton.js";

const router = Router();

router.post("/cart", tokenValidationMD, postCart)
router.get("/cart", tokenValidationMD, getCart)
router.delete("/cart", deleteCart)

export default router;