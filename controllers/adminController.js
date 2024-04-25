const { Admin } = require("../models/index");
const bcrypt = require("bcryptjs");

const adminController = {
  index: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      return res.status(200).json(admins);
    } catch (err) {
      console.error("Error fetching administrators:", err);
      return res.status(500).json({ message: "Error fetching administrators" });
    }
  },
  show: async (req, res) => {
    try {
      if (req.auth.role !== "Admin") {
        return res.status(403).json({ message: "You are not authorized to perform this action" });
      }
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Administrator not found" });
      }
      return res.status(200).json(admin);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching administrator" });
    }
  },
  store: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;

      if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: "All fields (firstname, lastname, email, password) are required to create an administrator" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newAdmin = await Admin.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
      return res.status(201).json(newAdmin);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error creating administrator" });
    }
  },
  update: async (req, res) => {
    try {
      const { firstname, lastname, email, address, phoneNumber, password } = req.body;
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Administrator not found" });
      }

      const updatableData = {};
      if (firstname) {
        updatableData.firstname = firstname;
      }
      if (lastname) {
        updatableData.lastname = lastname;
      }
      if (email) {
        updatableData.email = email;
      }
      if (address) {
        updatableData.address = address;
      }
      if (phoneNumber) {
        updatableData.phoneNumber = phoneNumber;
      }
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatableData.password = hashedPassword;
      }

      await admin.update(updatableData);
      return res.status(200).json(admin);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error updating administrator" });
    }
  },
  destroy: async (req, res) => {
    try {
      const admin = await Admin.findByPk(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Administrator not found" });
      }

      if (admin.id === 1) {
        return res.status(403).json({ message: "The default administrator cannot be deleted" });
      }

      await admin.destroy();
      return res.status(200).json({ message: "Administrator deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error deleting administrator" });
    }
  },
};

module.exports = adminController;
