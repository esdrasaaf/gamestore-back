import { Router } from "express";
import { postSignUp } from "../controllers/users.controllers.js";
import { schemaUserValidation } from "../middlewares/schemaUserValidation.js";

const router = Router();
router.post("/signup",schemaUserValidation, postSignUp);

export default router;