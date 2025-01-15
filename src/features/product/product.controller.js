import ProductModal from "./product.model.js";

export default class ProductController {

    getAllProducts(req, res){
        const products = ProductModal.getAll();
        res.status(200).send(products)
    }

    AddProduct(req, res){
        const {name, price, sizes} = req.body;
        const newProduct = {
            name,
            price: parseFloat(price),
            sizes: sizes.split(','),
            imageUrl: req.file.filename
        };
        const createdRecord = ProductModal.add(newProduct);
        res.status(201).send(createdRecord)
    }

    rateProduct(req, res){
        
    }

    getOneProduct(req, res){
        
    }

    filterProduct(req, res){
        
    }
}