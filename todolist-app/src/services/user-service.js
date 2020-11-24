const User = require("../models/User");

const createUser = (username, password) => {
  return new Promise((resolve, reject) => {
    try {
      User.create({ username, password })
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
};

const findUserByUsername = (username) => {
  return User.findOne({ username: username }).exec();
};

// const deleteUser = (userId) => {
//     return Promise((resolve, reject) => {
//         User.findById(userId).then((foundUser) => {
//           if (foundUser)

//         }).catch((error) => {

//         });
//     });
// };

module.exports = { createUser, findUserByUsername };
