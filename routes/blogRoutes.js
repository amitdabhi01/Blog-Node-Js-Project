import express from "express";

import blogController from "../controller/blogController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/add", upload.single("file"), blogController.createBlog);

router.get("/allBlogs", blogController.getAllBlogs);

router.get("/:id", blogController.getBlog);

router.patch("/update/:id", upload.single(file), blogController.updateBlog);

router.delete("/delete/:id", blogController.deleteBlog);

export default router;
