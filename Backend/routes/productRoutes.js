import express from "express";
import multer from "multer";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

import { protect } from "../middlewares/auth.middleware.js";
import { admin } from "../middlewares/admin.middleware.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/", getProducts);

router.post("/", protect, admin, upload.single("image"), createProduct);

router.get("/:id", getProductById);

router.put("/:id", protect, admin, upload.single("image"), updateProduct);

router.delete("/:id", protect, admin, deleteProduct);

export default router;
