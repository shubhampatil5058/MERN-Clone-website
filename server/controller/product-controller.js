const Product = require('../model/productSchema.js');

const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.json(products);
    } catch (error) {
        // Handle error
        console.error(error);
        response.status(500).json({ message: 'Server Error' });
    }
}

const getProductById = async (request, response) => {
    try {
        const product = await Product.findOne({ 'id': request.params.id });
        response.json(product);
    } catch (error) {
        // Handle error
        console.error(error);
        response.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    getProducts,
    getProductById
};
