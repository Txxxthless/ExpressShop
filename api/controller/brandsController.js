const Brand = require("../models/brand");
const ApiError = require("../error/apiError");

class BrandsController {
  async getAllBrands(req, res, next) {
    const brands = await Brand.find();
    return res.json(brands);
  }

  async getBrand(req, res, next) {
    const { name } = req.params;
    const brand = await Brand.findOne({ name });
    return res.json(brand);
  }

  async addBrand(req, res, next) {
    const { name } = req.body;

    const brand = new Brand({
      name,
    });

    try {
      await brand.save();
      res.end();
    } catch (error) {
      return next(new ApiError(500, "Failed to create new brand."));
    }
  }
}

module.exports = new BrandsController();
