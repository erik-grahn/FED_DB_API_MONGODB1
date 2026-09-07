import express from "express";
import {
  createProduct,
  deleteProduct,
  fetchAllProducts,
  fetchProductByObjectId,
  updateProduct,
} from "../controllers/productController";

const router = express.Router();

router.get("/", fetchAllProducts);
router.get("/:id", fetchProductByObjectId);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
