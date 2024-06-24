const mongoose = require('mongoose');

const Connection = async (username, password) => {
    const URL = `mongodb+srv://shubhampatil3493:Shubham%409999@cluster0.vxwnpvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL, { 
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
           
           
        });
        console.log('Database Connected Successfully');
    } catch(error) {
        console.error('Error connecting to database:', error.message);
    }
};

module.exports = Connection;
