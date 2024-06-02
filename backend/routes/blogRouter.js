import express from "express";

import {
  blogPost,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getSingleBlog,
  updateBlog,
} from "../controllers/blogController.js";
import { isAuthenticated, isAuthorized } from "../middleware/auth.js";

const router = express.Router();

router.post("/post", isAuthenticated, isAuthorized("Author"), blogPost);
router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Author"),
  deleteBlog
);
router.get("/all", getAllBlogs);
router.get("/singleBlog/:id", getSingleBlog);
router.get("/myblogs", isAuthenticated, isAuthorized("Author"), getMyBlogs);
router.put("/update/:id", isAuthenticated, isAuthorized("Author"), updateBlog);

export default router;
