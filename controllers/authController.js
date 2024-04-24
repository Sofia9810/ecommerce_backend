const jwt = require("jsonwebtoken");
const { User, Admin } = require("../models");

const authController = {
  getToken: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (user && password === user.password) {
        const token = jwt.sign(
          { sub: user.id, role: "User" },
          process.env.SECRET_TOKEN
        );
        return res.json({ token });
      }

      if (!user) {
        const admin = await Admin.findOne({ where: { email } });
        if (admin && password === admin.password) {
          const token = jwt.sign(
            { sub: admin.id, role: "Admin" },
            process.env.SECRET_TOKEN
          );
          return res.json({ token });
        }
      }
    } catch (error) {
      console.error("Error while obtaining the token:", error);
      return res.status(500).json({ message: "Server error." });
    }
    return res.status(401).json({ message: "Incorrect email or password." });
  },

};

module.exports = authController;
