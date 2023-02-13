const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/verifyToken");

// AUTH ROUTES
const { signUp, signIn } = require("../controller/user.controller");
router.post("/signUp", signUp);
router.post("/signIn", signIn);

// PRODUCT ROUTES
const {
  createProduct,
  getProductById,
  getAllProducts,
  updateProducts,
  deleteProduct,
} = require("../controller/product.controller");
router.post("/createProduct", auth, createProduct);
router.delete("/product/:id", auth, deleteProduct);
router.put("/product/:id", auth, updateProducts);
router.get("/product/:id", getProductById);
router.get("/products", getAllProducts);

// CART ROUTES
const {
  createCart,
  deleteCart,
  getAllCart,
  getCartUser,
} = require("../controller/cart.controller");
router.post("/cart", createCart);
router.delete("/cart/:id", deleteCart);
router.get("/carts", getAllCart);
router.get("/cart/:userId", getCartUser);

// HANDLE ITEM ROUTES
const { addItemToCart } = require("../controller/cartItems.controller");
router.post("/addToCart", addItemToCart);

module.exports = router;
