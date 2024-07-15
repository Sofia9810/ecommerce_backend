const { User } = require("../models/index");
const bcrypt = require("bcryptjs");

const userController = {
  index: async (req, res) => {
    console.log("hola")
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password, address, phoneNumber } = req.body;
      if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        address,
        phoneNumber,
        password: hashedPassword,
      });
      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  update: async (req, res) => {
    try {
      const { firstname, lastname, email, password, address, phoneNumber } = req.body;
      if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (req.auth.sub !== req.params.id && req.auth.role !== "Admin") {
        return res.status(403).json({ message: "You are not authorized to update this user" });
      }
      const updatableData = {
        firstname,
        lastname,
        email,
        address,
        phoneNumber,
        password: hashedPassword,
      };
      await user.update(updatableData);
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong" });
    }
  },
  destroy: async (req, res) => {
    try {
      const userId = req.params.id;
      if (userId !== req.auth.sub && req.auth.role !== "Admin") {
        return res.status(403).json({ message: "You are not authorized to delete this user." });
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      await user.destroy();
      return res.json({ message: "User deleted successfully." });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Oops! Something went wrong." });
    }
  },
};

module.exports = userController;