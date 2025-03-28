import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.route("/getuser").get(isAuthenticated, getUser);

export default router;