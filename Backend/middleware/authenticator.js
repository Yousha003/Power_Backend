const jswt = require("jsonwebtoken");
require("dotenv").config();

const authenticatorLayer = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authorization?.split(" ")[1];

    jswt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        res.status(401).json({ message: err.message });
      } else {
        if (decoded) {
          req.body.user = decoded.user._id;
          next();
        }
      }
    });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { authenticatorLayer };
