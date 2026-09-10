// productController.js
const productService = require("../services/product.service.js")

// Create a new product
async function createProduct(req, res) {
  try {
    const product = await productService.createProduct(req.body);
   // return res.status(201).json(product);
   console.log(product)
    return res.status(201).send(product);
  } catch (err) {
    //return res.status(500).json({ error: err.message });
    console.log(err)
    return res.status(500).send({ error: err.message });
  }
}

// Delete a product by ID
async function deleteProduct(req, res) {
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    //return res.json({ message });
    return res.status(201).send(product);
  } catch (err) {
   // return res.status(500).json({ error: err.message });
    return res.status(500).send({ error: err.message });
  }
}

// Update a product by ID
async function updateProduct(req, res) {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
   // return res.json(product);
   return res.status(201).send(product);
  } catch (err) {
   // res.status(500).json({ error: err.message });
   return res.status(500).send({ error: err.message });
  }
}

// Get all products
// async function getAllProducts(req, res) {
//   try {
//     const products = await productService.getAllProducts();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// Find a product by ID
async function findProductById(req, res) {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    return res.status(200).send(product);
  } catch (err) {
   // return res.status(404).json({ message: err.message });
    return res.status(404).send({ message: err.message });
  }
}

// Find products by category
async function findProductByCategory(req, res) {
  const category = req.params.category;
  try {
    const products = await productService.findProductByCategory(category);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Search products by query
async function searchProduct(req, res) {
  try {
    const query = req.params.query;
    const products = await productService.searchProduct(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all products with filtering and pagination
async function getAllProducts(req, res) {
  //const productId =req.params.id
  try {

    const products = await productService.getAllProducts(req.query);

    return res.status(200).send(products);
  } catch (err) {
    //return res.status(500).json({ error: err.message });
    return res.status(500).send({ error: err.message });
  }
}

const createMultipleProduct= async (req, res) => {
  const productId =req.params.id
  try {
   const product = await productService.createMultipleProduct(req.body)
   //return res.status(202).json({ message: "Products Created Successfully", success: true });
   return res.status(202).send({ message: "Products Created Successfully", success: true });
  } catch (error) {
    //res.status(500).json({ error: "Something went wrong" });
    return res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  findProductByCategory,
  searchProduct,
  createMultipleProduct

};
