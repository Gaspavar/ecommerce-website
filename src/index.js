import {getProductData} from "./api.js";

const title = document.querySelectorAll("h1")[0];
const description = document.querySelectorAll("p")[0];
const imageURL = document.querySelectorAll("img")[0];

getProductData().then((product) => {
    title.textContent = product.title;
    description.textContent = product.description
    imageURL.attributes[0].textContent = product.image
});
