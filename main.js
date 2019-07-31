// import store from './data/store.js';
import renderButton from './data/button-renderer.js';
import ProductSet from './data/product-set.js';
import productList from './data/product-list.js';
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

//Make a new product set
//getRandomThree
//re-assign button values

const productSet = new ProductSet(productList);

//Event Listener to handle this later
const randomProducts = productSet.getRandomThree();
renderButton(randomProducts[0], button1);
renderButton(randomProducts[1], button2);
renderButton(randomProducts[2], button3);