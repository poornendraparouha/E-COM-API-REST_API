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

    getOneProduct(req, res){
        const id = req.params.id;
        const product = ProductModal.get(id);
        if(!product){
            res.status(404).send("product not found")
        }else{
            return res.status(200).send(product);
        }  
    }

    filterProduct(req, res){
        
    }
    rateProduct(req, res){
        
    }
}