import productList from './product-list.js';

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
    
};
export default store;