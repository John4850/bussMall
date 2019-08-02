import store from '../data/store.js';
import productList from '../data/product-list.js';
import ProductSet from '../data/product-set.js';
import renderButton from '../data/button-renderer.js';

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

test ('threeRandomProducts returns three procuts', assert => {
    const products = new ProductSet(productList);
    const threeRandomProducts = products.getRandomThree();

    assert.equal(threeRandomProducts.length, 3);

});
test ('threeRandomProducts returns three unique products', assert => {
    const products = new ProductSet(productList);
    const threeRandomProducts = products.getRandomThree();

    assert.notEqual(threeRandomProducts[0], threeRandomProducts[1]);
    assert.notEqual(threeRandomProducts[2], threeRandomProducts[1]);
    assert.notEqual(threeRandomProducts[0], threeRandomProducts[2]);
});
test ('Records User Choice in data table at end of round', assert => {



});