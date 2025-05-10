import express from "express";
import {
  protectedRoute,
  adminProtectedRoute,
} from "../middlewares/auth.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsByCategory,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post(
  "/createproduct",
  protectedRoute,
  adminProtectedRoute,
  createProduct
);
router.get("/category/:category", getProductsByCategory);
router.delete(
  "/deleteproduct",
  protectedRoute,
  adminProtectedRoute,
  deleteProduct
);

export default router;
