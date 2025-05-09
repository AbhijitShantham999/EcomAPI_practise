import express from "express";
import { register, allusers, login,logout } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.get("/allusers", allusers);
router.post("/login", login);
router.post("/login", login);
router.post("/logout", logout);

export default router;
