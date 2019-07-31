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
    console.log(threeRandomProducts);

    assert.notEqual(threeRandomProducts[0], threeRandomProducts[1]);
    assert.notEqual(threeRandomProducts[2], threeRandomProducts[1]);
    assert.notEqual(threeRandomProducts[0], threeRandomProducts[2]);
});
test ('buttonRenderer rendors an HTML button with attributes', assert => {
    const productList = {
        id: 'bag',
        name: 'Couture Luggage',
        image: 'assets/bag.jpg',
        description: 'Stylish suitcase that highlights your love of sci-fi fandoms.',
    };
        
    const expected = '<label id="button"><input type="radio" name="button1" value="product-name"><img class="radio-image" src="./assets/bathroom.jpg"></label>';
        
    assert.deepEqual(renderButton(productList), expected);

});
