const User = require("../models/User");

const createUser = (username, password) => {
  return User.create({ username, password });
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
