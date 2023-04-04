import {getProductData} from "./api.js";

getProductData().then((product) => {
    console.log(product);
})