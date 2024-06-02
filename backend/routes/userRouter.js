import express from "express";
import {
  getAllAuthors,
  getMyProfile,
  register,
} from "../controllers/userController.js";
import { login, logout } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/myprofile", isAuthenticated, getMyProfile);
router.get("/authors", getAllAuthors);

export default router;
