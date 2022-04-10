const User = require("../Models/User");
const { findUserByProperty } = require("../Services/users");
const { error } = require("../utils/error");

const router = require("express").Router();

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await findUserByProperty( email);
    if (user) {
      throw error("User Already Exist", 400);
    }
    user = new User({
      name,
      email,
      password,
    });
    await user.save();

    res.status(201).json({
      message: "Create a new user successfully",
    });
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    res.status(200).json({
      email,
      password,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
