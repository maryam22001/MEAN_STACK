//routes 
const express = require('express');
const productController = require("./Controllers.js")
const router = express.Router();


router.route('/').get(productController.getAllProducts)
.post(productController.addProduct)

router.route('/:id')
.get(productController.getOneProduct)
.patch(productController.EditProduct)
.delete(productController.deleteProduct)
module.exports = router;