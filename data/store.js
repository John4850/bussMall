import productList from './product-list.js';
import { findById } from './utilties.js';


const PRODUCT_KEY = 'PRODUCTS';
const SCORE_CARD_KEY = 'score-card';
const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCT_KEY);
        if(!products) {
            store.save(PRODUCT_KEY, productList);
            products = productList;
        }
        return products;
    },
    getScoreCard() {
        let ScoreCard = store.get(SCORE_CARD_KEY);
        if(!ScoreCard) {
            ScoreCard = [];
        }
        return ScoreCard;
    },
    findById(items, id) {
        for(let i = 0; i < items.length; i++) {
            const item = items[i];
            if(item.id === id) {
                return item;      
            }
        }
    },
    writeScore(displayedProducts, userChoice) {
        // gets a scorecard, or makes it if none exist,
        const scoreCard = store.getScoreCard();
        
        //record the three items shown, displayedProducts
        //update qty for each item shown
        for(let i = 0; i < displayedProducts.length; i++) {
            const displayedProduct = displayedProducts[i];
            const shownProduct = findById(scoreCard, displayedProduct);
            if(shownProduct) {
                shownProduct.quantityShown++;
            }
            else {
                const newShownProduct = {
                    id: displayedProduct,
                    quantityShown: 1,
                    quantityPicked: 0,
                };
                scoreCard.push(newShownProduct);
            }
            //update quantityPicked with userChoice
            // const scoredProduct = findById(userChoice);
            // shownProduct.quantityPicked++;
            // console.log(scoredProduct + 'this is scoredProduct');
            

        
        }
        // console.log(scoreCard + 'this is scoreCard');
        const roundPick = findById(scoreCard, userChoice);
        roundPick.quantityPicked++;
        store.save(SCORE_CARD_KEY, scoreCard);

    }  
};
export default store;