// import express
import express from "express";
import ProductController from "./product.controller.js";
// initiate express router
const ProductRouter = express.Router();

const productController = new ProductController();


// all the paths to controller methods
ProductRouter.get('/', productController.getAllProducts) ;
ProductRouter.post('/', productController.AddProduct);
ProductRouter.get('/', productController.getOneProduct);
ProductRouter.post('/', productController.rateProduct) ;
ProductRouter.get('/', productController.filterProduct) ;

export default ProductRouter;