import express from "express";
const router = express.Router();

//middleware
import { isAdmin, requireSignIn } from "../../middlewares/auth.middleware.js";
//controllers
import {
  getCategoryBySlug,
  getAllCategoryList,
  removeCategoryById,
  updateCategoryById,
  createCategory,
} from "../../controller/Category/category.controller.js";

router.post("/category", requireSignIn, isAdmin, createCategory);
router.put("/category/:categoryId", requireSignIn, isAdmin, updateCategoryById);
router.delete(
  "/category/:categoryId",
  requireSignIn,
  isAdmin,
  removeCategoryById
);
router.get("/categories", getAllCategoryList);
router.get("/category/:slug", getCategoryBySlug);

export default router;
