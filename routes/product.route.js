const express = require('express');
const router = express.Router();
const {getProduct,getProducts,createProduct,updateProduct,deleteProduct} = require('../controller/product.controller')

router.get('/:id',getProduct);
router.get('/',getProducts);
router.post('/',createProduct);
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)
module.exports = router;