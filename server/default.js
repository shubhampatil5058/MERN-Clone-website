const Product = require('./model/productSchema.js');
const { products } = require('./constants/product.js'); // Note the use of destructuring here

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        if (error.message.includes('buffering timed out')) {
            console.error('Operation timed out:', error.message);
        } else {
            console.error('Error:', error.message);
        }
    }
};

module.exports = DefaultData;
