import { Router } from "express";
import { createProduct, deleteProduct, updateProduct, getProducts } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)

export default router;