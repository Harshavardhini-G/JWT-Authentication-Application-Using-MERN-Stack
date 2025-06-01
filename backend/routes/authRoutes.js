const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: `Welcome user ${req.user}` });
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
