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
// test ('buttonRenderer rendors an HTML button with attributes', assert => {
//     const product1 = {
//         id: 'bag',
//         name: 'Couture Luggage',
//         image: '/assets/bag.jpg',
//         description: 'Stylish suitcase that highlights your love of sci-fi fandoms.',
//     };
//     const dom = renderButton(product1);    
//     const expected = '<label id="button"><input type="radio" name="button" value="bag"><img class="radio-image" src="/assets/bag.jpg"></label>';
//     const result = dom.outerHTML;

//     assert.deepEqual(result, expected);

// });
