const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existUser) {
      res.status(400).send({
        status: "failed",
        message: "User already exist",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hasheadPassword = await bcrypt.hash(password, salt);
      await prisma.user.create({
        data: {
          email: email,
          password: hasheadPassword,
        },
      });

      res.status(200).send({
        status: "Success",
        message: "Sign Up Success",
        user: {
          email: email,
          password: hasheadPassword,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Sign Up Failed",
    });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existUser) {
      res.status(400).send({
        status: "failed",
        message: "User not found",
      });
    } else {
      const compare = await bcrypt.compare(password, existUser.password);
      if (!compare) {
        return res.status(400).send({
          status: "failed",
          message: "password salah",
        });
      }

      const token = jwt.sign(existUser.id, process.env.SECRET);

      res.status(200).send({
        status: "success",
        message: "Sign In Success",
        user: {
          token: token,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Sign In Failed",
    });
  }
};
