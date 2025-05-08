import express from "express";
import { register, allusers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.get("/allusers", allusers);

export default router;
