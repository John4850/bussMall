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
}
export default ProductSet;