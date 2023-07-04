const Product = require("../models/product");
const Brand = require("../models/brand");
const ApiError = require("../error/apiError");

class ProductsController {
  async getAllProducts(req, res, next) {
    const products = await Product.find().populate("brand").exec();
    return res.json(products);
  }

  async getProduct(req, res, next) {
    const { name } = req.params;
    const product = await Product.findOne({ name }).populate("brand").exec();
    return res.json(product);
  }

  async addProduct(req, res, next) {
    const { name, price, brandName } = req.body;

    const brand = await Brand.findOne({ name: brandName });

    if (!brand) {
      return next(
        new ApiError(
          404,
          `Brand <${brandName}> not found. Try adding it first.`
        )
      );
    }

    const product = new Product({
      name: name,
      price: price,
      brand: brand._id,
    });

    try {
      await product.save();
      res.end();
    } catch (error) {
      return next(new ApiError(500, "Failed to add new product."));
    }
  }
}

module.exports = new ProductsController();
