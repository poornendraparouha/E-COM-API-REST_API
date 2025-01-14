import ProductModal from "./product.model.js";

export default class ProductController {

    getAllProducts(req, res){
        const products = ProductModal.getAll();
        res.status(200).send(products)
    }

    AddProduct(req, res){
        console.log(req.body)
        console.log("this is a post request");
        res.status(200).send("Post request received")
    }

    rateProduct(req, res){
        
    }

    getOneProduct(req, res){
        
    }

    filterProduct(req, res){
        
    }
}