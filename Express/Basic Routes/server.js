require('dotenv').config();
const express = require('express');
const DButil = require('./dbUtil');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = process.env.PORT || 8080;
const dbname = process.env.MONOGO_DB_NAME;
const dburl = process.env.MONOGO_DB_URL;

// middleware
app.use(express.json());

app.use('/products', productRoutes);

if (port && dburl && dbname) {
    app.listen(port, () => {
        if (dburl && dbname) {
            DButil.connectDB(dburl, dbname).then((dRes) => {
                console.log(dRes);
            }).catch((err) => {
                console.error(err);
                process.exit(0);
            })
        }
        console.log(`server started at ${port}`);
    });
}