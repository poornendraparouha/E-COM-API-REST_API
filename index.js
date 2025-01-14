import express from "express";
import ProductRouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// for all requests related to products ,redirected to product routes.
app.use('/api/products', ProductRouter)


app.get('/', (req, res) => {
    res.send('WELCOME TO E-COM-APIs!');
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});