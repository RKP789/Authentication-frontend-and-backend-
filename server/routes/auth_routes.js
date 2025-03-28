import express from "express";
import { logout, signin, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logout").get(logout);

export default router;