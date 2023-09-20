const productService = require("../Services/product.service");
const formidable = require("formidable-serverless");
const {s3Upload} = require("../../util/s3Service");

const createProduct = async (req, res, next) => {
  const form = new formidable.IncomingForm({ multiples: true });

  try {
    form.parse(req, async (err, fields, files) => {
      let filesToUpload = files.images;

      // Wrap single file in an array if it's not already an array
      if (!Array.isArray(filesToUpload)) {
        filesToUpload = [filesToUpload];
      }

      const imageUrls = await s3Upload(filesToUpload);
      for (let i=0; i<filesToUpload.length; i++) {
        filesToUpload[i].url = imageUrls[i*2].Link;
      }

      const prodReq = {
        body: fields,
        files: filesToUpload
      }

      const product = await productService.createProduct(prodReq);
      return res.status(200).json(product);
    });
  } catch (error) {
    next(error);
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    const product = await productService.getAllProduct();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getProduct(req);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProduct,
  getAllProduct,
  getProduct,
};
