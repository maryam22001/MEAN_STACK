//functions to handel the functtis
const products = require('./Products.js')


exports.getAllProducts=('/products', (req, res) => {
    res.json(products)
    res.send("products")

});

exports.getOneProduct=((req, res) => {
    const productId = Products.findIndex(i => i.id === parseInt(req.params.id))
    if (!productId) {
        return res.status(404).send("product not found")
    } else {
        res.json(productId)
    }
})
exports.addProduct=((req, res) => {

    const newProduct = { id: Products.length + 1, ...req.body };


    Products.push(newProduct)
    res.status(201).json(newProduct) // Created
    res.send("product added")

})

exports.EditProduct=((req, res) => {

    const productIndex = Products.findIndex(i => i.id === parseInt(req.params.id));

    Products[productIndex] = { ...Products[productIndex], ...req.body };

    res.status(200).json({
        success: true,
        data: Products[productIndex],
    });

})
exports.deleteProduct=((req,res)=>{
        const productIndex = Products.findIndex(i => i.id === parseInt(req.params.id));

        if (productIndex === -1) return res.status(404).send('Item not found');

        const deleted = Products.splice(productIndex, 1);
       
        res.status(200).json({
            success: true,
            message: "product deleted",
        });
    })