import express from "express";
import { get } from "mongoose";

const router = express.Router();

router.get("/",getAllProducts);
router.post("/createproduct",createProduct);
router.get("/category/:category",getProductsByCategory);
router.delete("/deleteproduct/:id",deleteProduct);


export default router