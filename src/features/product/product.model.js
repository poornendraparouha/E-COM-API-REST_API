export default class ProductModal {
    constructor(id, name, desc, price, imageUrl, category, sizes, stock, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl
        this.category = category;
        this.sizes = sizes
        this.stock = stock;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static add(product){
            product.id = products.length + 1;
        products.push(product);
        return product;
    }

    static getAll(){
        return products;
    }

    // // Method to update product details
    // updateDetails(details) {
    //     Object.assign(this, details);
    //     this.updatedAt = new Date();
    // }

    // // Method to check stock availability
    // isAvailable() {
    //     return this.stock > 0;
    // }
}

var products = [
    new ProductModal(1, 'T-Shirt', 'A comfortable cotton t-shirt', 19.99, 'tshirt.jpg', 'Clothing', ['S', 'M', 'L', 'XL'], 100, new Date(), new Date()),

    new ProductModal(2, 'Jeans', 'Stylish blue jeans', 49.99, 'jeans.jpg', 'Clothing', ['28', '30', '32', '34'], 50, new Date(), new Date()),

    new ProductModal(3, 'Sneakers', 'Running sneakers', 89.99, 'sneakers.jpg', 'Footwear', ['8', '9', '10', '11'], 75, new Date(), new Date()),

    new ProductModal(4, 'Jacket', 'Warm winter jacket', 129.99, 'jacket.jpg', 'Clothing', ['M', 'L', 'XL'], 30, new Date(), new Date()),

    new ProductModal(5, 'Hat', 'Stylish summer hat', 14.99, 'hat.jpg', 'Accessories', ['One Size'], 200, new Date(), new Date())
]


