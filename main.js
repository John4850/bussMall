// import store from './data/store.js';
import renderButton from './data/button-renderer.js';
import ProductSet from './data/product-set.js';
import productList from './data/product-list.js';
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const form = document.getElementById('formData');



//Make a new product set
const productSet = new ProductSet(productList);

//getRandomThree
const randomProducts = productSet.getRandomThree();
//Event Listener to handle this later
renderButton(randomProducts[0], button1);
renderButton(randomProducts[1], button2);
renderButton(randomProducts[2], button3);

function scoreResults(userChoice) {
    let resultsFromRound = [];
    if(resultsFromRound) {
        resultsFromRound.quantity++;
    }
    else {
        resultsFromRound.push([
            {
                item: userChoice,
                qty: 1
            }
        ]);
        for(let i = 0; i < resultsFromRound.length; i++) {
            resultsFromRound[i].qty += 1;
        }
        return resultsFromRound;
        
    } 
}


// push Displayed array to be saved?
let displayedProducts = [];
for(let i = 0; i < 3; i++) {
    displayedProducts.push(randomProducts[i].id);
}


form.addEventListener('submit', () => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const userChoice = formData.get('button');
    let resultsFromRound = scoreResults(userChoice);
    //score
    displayedProducts.push(randomProducts);
    
    
    //reset images
    const randomProducts2 = productSet.getRandomThree();
    renderButton(randomProducts2[0], button1);
    renderButton(randomProducts2[1], button2);
    renderButton(randomProducts2[2], button3);
    
    
    console.log(resultsFromRound, 'results from Round');
    console.log(displayedProducts, 'displayed products');
    console.log(userChoice, 'user choice');
    
});