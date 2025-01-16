import UserModel from "../user/user.model.js"

export default class ProductModal {
    constructor(id, name, desc, price, imageUrl, category, sizes, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl
        this.category = category;
        this.sizes = sizes
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static add(product){
            product.id = products.length + 1;
        products.push(product);
        return product;
    }
    static get(id){
        const product = products.find((i)=> i.id == id);
        return product;
    }

    static getAll(){
        return products;
    }

    static filter(minPrice, maxPrice, category){
        const result = products.filter((product)=>{
            return (
                (!minPrice || product.price >= minPrice) && 
                (!maxPrice || product.price <= maxPrice) && 
                (!category || product.category == category)
            );
        });
        return result;
    }

    static rateProduct(userID, productID, rating){
        // 1. validate user 
        const user = UserModel.getAll().find((u)=>u.id== userID);
        if(!user){
            return "User not found"
        }
        // 2. validate the product
        const product = products.find((p)=>p.id== productID);
        if(!product){
            return "Product not found"
        }
        // 3. check if there are any ratings and if not then add ratings array
        if(!product.ratings){
            product.ratings = [];
            product.ratings.push({
                userID: userID,
                rating: rating
            });
        }else{
            // check if user rating is already available
            const existingRatingINdex = product.ratings.findIndex((r)=>r.userID == userID);
            if(existingRatingINdex >= 0){
                product.ratings[existingRatingINdex] = {
                    userID: userID,
                    rating: rating
                }
            }else{
                // if no existing rating then add rating
                product.ratings.push({
                    userID: userID,
                    rating: rating
                });
            }
        }
    }
}

var products = [
    new ProductModal(1, 'T-Shirt', 'A comfortable cotton t-shirt', 19.99, 'tshirt.jpg', 'clothing', ['S', 'M', 'L', 'XL'], new Date(), new Date()),

    new ProductModal(2, 'Jeans', 'Stylish blue jeans', 49.99, 'jeans.jpg', 'clothing', ['28', '30', '32', '34'], new Date(), new Date()),

    new ProductModal(3, 'Sneakers', 'Running sneakers', 89.99, 'sneakers.jpg', 'footwear', ['8', '9', '10', '11'], new Date(), new Date()),

    new ProductModal(4, 'Jacket', 'Warm winter jacket', 129.99, 'jacket.jpg', 'clothing', ['M', 'L', 'XL'], new Date(), new Date()),

    new ProductModal(5, 'Hat', 'Stylish summer hat', 14.99, 'hat.jpg', 'accessories', ['One Size'], new Date(), new Date())
]


