const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { requireUser } = require("../middlewares/auth");
const User = require("../models/User");
const userService = require("../services/user-service");
const { JWT_SECRET } = require("../config");

const router = Router({ mergeParams: true });

router
  .get("/authentication", requireUser, (req, res, next) => {
    res.json(req.user);
  })
  .post("/authentication", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ message: "Wrong user" });
    }

    const token = jwt.sign(user.toJSON(), JWT_SECRET);

    res.send(token);
  });

// POST /users
router.post("/", (req, res) => {
  const { username, password } = req.body;

  if (!username) {
  }
  if (!password) {
  }

  userService
    .findUserByUsername(username)
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "Username is existing" });
        return;
      }

      return Promise.resolve(true);
    })
    .then(() => {
      return userService.createUser(username, password).then((createdUser) => {
        res.status(201).json(createdUser);
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
});

module.exports = router;
