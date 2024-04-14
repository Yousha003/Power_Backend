const express = require("express");

const bcrypt = require("bcrypt");

const jswt = require("jsonwebtoken");

const { UserModel } = require("../models/user");

const userRouter = express.Router();

require("dotenv").config();

userRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await UserModel.find({ email });
    if (user.length) {
      res.status(400).json({ message: "User already exists." });
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          // djlskdjflsdjfsldkfjsdljflj2l31238w7934573485043753400
          res.status(400).json({ message: err.message });
        } else {
          await UserModel({ email, password: hash }).save();
          let newUser = await UserModel.findOne({ email });
          jswt.sign(
            { user: newUser },
            process.env.SECRET_KEY,
            async (err, token) => {
              if (err) {
                res.status(400).json({ message: err });
              } else {
                res
                  .status(201)
                  .json({ message: "User created successfully", token });
              }
            }
          );
        }
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.find({ email });
    if (user.length == 0) {
      res.status(401).json({ message: "User not exists" });
    } else {
    
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          if (result) {
            jswt.sign(
              { user: user[0] },
              process.env.SECRET_KEY,
              async (err, token) => {
                if (err) {
                  res.status(400).json({ message: err });
                } else {
                  res
                    .status(200)
                    .json({ message: "Login successfully", token });
                }
              }
            );
          } else {
            res.status(401).json({ message: "Password is wrong!" });
          }
        }
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { userRouter };
