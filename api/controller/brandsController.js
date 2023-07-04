const Brand = require("../models/brand");

class BrandsController {
  async getAllBrands(req, res) {
    const brands = await Brand.find();
    return res.json(brands);
  }

  async getBrand(req, res) {
    const { name } = req.params;
    const brand = await Brand.findOne({ name });
    return res.json(brand);
  }

  async addBrand(req, res) {
    const { name } = req.body;

    const brand = new Brand({
      name,
    });

    try {
      await brand.save();
    } catch (error) {
      console.log(error);
    } finally {
      res.end();
    }
  }
}

module.exports = new BrandsController();
