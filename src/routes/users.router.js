import { Router } from "express";
import { postSignUp } from "../controllers/users.controllers";


const router = Router();
router.post("/signup", postSignUp)

export default router;