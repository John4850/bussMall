import store from '../data/store.js';
import productList from '../data/product-list.js';
import ProductSet from '../data/product-set.js';

const test = QUnit.test;
store.storage = window.sessionStorage;

test ('Bootstraps Products to Store', assert => {
    const products = store.getProducts();

    assert.deepEqual(products, productList);
});

test ('Copies bootstrapped data', assert =>{

    const products = new ProductSet(productList);


    assert.deepEqual(products.list, productList);
    assert.notEqual(products.list, productList);
});
