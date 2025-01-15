// import express
import express from "express";
import ProductController from "./product.controller.js";
import {upload} from "../../middlewares/fileUpload.middleware.js";
// initiate express router
const ProductRouter = express.Router();

const productController = new ProductController();

// all the paths to controller methods
ProductRouter.get('/', productController.getAllProducts) ;
ProductRouter.post('/', upload.single('imageUrl'), productController.AddProduct);
ProductRouter.get('/:id', productController.getOneProduct);
ProductRouter.post('/', productController.rateProduct) ;
ProductRouter.get('/', productController.filterProduct) ;

export default ProductRouter;