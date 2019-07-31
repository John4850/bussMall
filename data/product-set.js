import { getRandomInt } from './utilties.js';

class ProductSet {
    constructor(products) {
        this.list = products.slice();
    }
    getRandomProduct() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index];
        return product;
    }
    hasProducts() {
        return this.list.length > 0;
    }
    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return;
            }
        }
    }
    getRandomThree() {
        let threeRandomProducts = [];
        for(let i = 0; i < 3; i++) {
            let x = this.getRandomProduct();
            threeRandomProducts.push(x);
            this.removeById(x.id);

        }
        return threeRandomProducts;   

    }
}
export default ProductSet;