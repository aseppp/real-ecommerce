const express = require("express");
const router = express.Router();

const { signUp, signIn } = require("../controllers/auth.controller");
router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
