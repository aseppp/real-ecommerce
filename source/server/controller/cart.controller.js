const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllCart = async (req, res) => {
  try {
    const cart = await prisma.cart.findMany({});
    res.status(200).send({
      status: "Success",
      message: "Success get all carts",
      data: {
        cart,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.createCart = async (req, res) => {
  const { email } = req.body;

  try {
    const existCart = await prisma.cart.findFirst({
      where: {
        user: {
          email: email,
        },
      },
    });

    if (existCart) {
      res.status(400).send({
        status: "Failed",
        message: "Cart already exist",
      });
    } else {
      const cart = await prisma.cart.create({
        data: {
          user: { connect: { email: email } },
        },
      });

      res.status(200).send({
        status: "Success",
        message: "Success create cart",
        data: {
          cart,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getCartUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await prisma.cart.findFirst({
      where: {
        userId: userId,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Success get cart user",
      data: {
        cart,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await prisma.cart.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Success delete cart",
      data: {
        cart,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
