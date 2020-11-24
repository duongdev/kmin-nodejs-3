const { Router } = require("express");
const jwt = require("jsonwebtoken");
const userService = require("../services/user-service");

const router = Router({ mergeParams: true });

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

router.post("/authentication", (req, res) => {
  const { username, password } = req.body;

  // validate username & password
  userService
    .findUserByUsername(username)
    .then((foundUser) => {
      if (!foundUser) {
        res.status(400).json({ message: `Username doesn't exist` });
        return;
      }

      if (foundUser.password !== password) {
        res.status(400).json({ message: `Wrong password` });
        return;
      }

      return Promise.resolve(foundUser);
    })
    .then((user) => {
      console.log(user.toObject());
      const token = jwt.sign(user.toObject(), "s3cr3t");
      res.send(token);
    });
});

module.exports = router;
