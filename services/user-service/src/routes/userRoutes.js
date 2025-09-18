import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

// register user
router.post("/register", registerUser);

// login user
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "This is a protected route",
    user: req.user,
  });
});

export default router;

