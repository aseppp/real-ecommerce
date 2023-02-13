const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    product_image,
    product_stock,
    product_variant,
    email,
  } = req.body;

  try {
    const existProduct = await prisma.products.findUnique({
      where: {
        product_name: product_name,
      },
    });

    if (existProduct) {
      res.status(400).send({
        status: "Failed",
        message: "Product already exist",
      });
    } else {
      const productData = await prisma.products.create({
        data: {
          product_name: product_name,
          product_image: product_image,
          product_price: product_price,
          product_variant: product_variant,
          product_stock: product_stock,
          author: { connect: { email: email } },
        },
      });

      res.status(200).send({
        status: "Success",
        message: "Create Product Success",
        data: {
          productData,
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

exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    res.status(200).send({
      status: "Success",
      message: "Success get all products",
      data: {
        products,
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

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const product = await prisma.products.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "Success get data product",
      data: {
        product,
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

exports.updateProducts = async (req, res) => {
  const { id } = req.params;
  const {
    product_name,
    product_price,
    product_image,
    product_stock,
    product_variant,
    email,
  } = req.body;

  try {
    const product = await prisma.products.update({
      where: {
        id: id,
      },
      data: {
        product_name: product_name,
        product_image: product_image,
        product_price: product_price,
        product_variant: product_variant,
        product_stock: product_stock,
        author: { connect: { email: email } },
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Success Update Data",
      data: {
        product,
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

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.products.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Success delete product",
      data: {
        product,
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
