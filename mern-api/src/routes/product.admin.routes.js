const express=require("express");
const router=express.Router();
const productController=require("../controllers/product.controller.js");
const authenticate = require("../middleware/authenticat.js");


/* router.post('/', productController.createProduct);
router.post('/creates', productController.createMultipleProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct); */

router.post('/', authenticate,  productController.createProduct);
router.post('/creates', authenticate,  productController.createMultipleProduct);
router.delete('/:id/delete', authenticate,  productController.deleteProduct);
router.put('/:id', authenticate,  productController.updateProduct);

module.exports=router;