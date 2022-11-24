import { Router } from "express";
import { postSignUp,postSignIn } from "../controllers/users.controllers.js";
import { schemaUserValidation } from "../middlewares/schemaUserValidation.js";

const router = Router();
router.post("/signup",schemaUserValidation, postSignUp);
router.post("/signin",postSignIn);

export default router;