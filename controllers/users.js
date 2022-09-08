const User = require("../models/User-model");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName: userName });
    if (!user) {
      res.status(404).json({ msg: "admin with this name does not exist" });
    }
    if (await bcrypt.compare(password, user.password)) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ msg: "wrong password" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getUser,
};
