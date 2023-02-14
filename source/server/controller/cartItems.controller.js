const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.addItemToCart = async (req, res) => {
  const { productId, cartId } = req.body;
  try {
    const item = await prisma.cartItems.create({
      data: {
        productId: productId,
        cartId: cartId,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Success add item to cart",
      data: {
        item,
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

exports.deleteCartItems = async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await prisma.cartItems.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Success delete items",
      data: {
        cartItem,
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
