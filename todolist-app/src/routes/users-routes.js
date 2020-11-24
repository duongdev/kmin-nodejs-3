const { Router } = require("express");
const { createUser } = require("../services/user-service");
const userService = require("../services/user-service");

const router = Router({ mergeParams: true });

const requireUser = (req, res, next) => {
  if (req.headers.user) {
    next();
  } else {
    console.log("Require user!");
    res.status(403).json({ message: "User is required" });
  }
};

// POST /users
// Middleware
router.post("/", requireUser, (req, res) => {
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
