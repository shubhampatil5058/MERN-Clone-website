const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { v4: uuid } = require('uuid');

const Connection = require('./database/db.js');
const DefaultData = require('./default.js');
const Routes = require('./routes/route.js');

dotenv.config();
const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

module.exports = {
    paytmMerchantkey: process.env.PAYTM_MERCHANT_KEY,
    paytmParams: {
        MID: process.env.PAYTM_MID,
        WEBSITE: process.env.PAYTM_WEBSITE,
        CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
        INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
        ORDER_ID: uuid(),
        CUST_ID: process.env.PAYTM_CUST_ID,
        TXN_AMOUNT: '100',
        CALLBACK_URL: 'http://localhost:8000/callback',
        EMAIL: 'kunaltyagi@gmail.com',
        MOBILE_NO: '1234567852'
    }
};
