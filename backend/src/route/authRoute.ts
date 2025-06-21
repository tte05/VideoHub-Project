import express from "express";
import { signUpUser, signInUser } from "../controllers/auth/authController";
const router = express.Router();

router.post('/sign-up',signUpUser);
router.post('/sign-in',signInUser)
export default router;