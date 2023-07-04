const Product = require("../models/product");
const Brand = require("../models/brand");

class ProductsController {
  async getAllProducts(req, res) {
    const products = await Product.find().populate("brand").exec();
    return res.json(products);
  }

  async getProduct(req, res) {
    const { name } = req.params;
    const product = await Product.findOne({ name }).populate("brand").exec();
    return res.json(product);
  }

  async addProduct(req, res) {
    const { name, price, brandName } = req.body;

    const brand = await Brand.findOne({ name: brandName });

    if (!brand) {
      res.end();
    }

    const product = new Product({
      name: name,
      price: price,
      brand: brand._id,
    });

    try {
      await product.save();
    } catch (error) {
      console.log(error);
    } finally {
      res.end();
    }
  }
}

module.exports = new ProductsController();
