import {getProductData} from "./api.js";

const title = document.querySelector(".title");
const description = document.querySelector(".description");
const imageURL = document.querySelector(".main-image");

const firstVariantImage = document.querySelector(".first-variant-image")
const secondVariantImage = document.querySelector(".second-variant-image")
const thirdVariantImage = document.querySelector(".third-variant-image")

const firstVariantTitle = document.querySelector(".first-variant-title")
const secondVariantTitle = document.querySelector(".second-variant-title")
const thirdVariantTitle = document.querySelector(".third-variant-title")


getProductData().then((product) => {
    title.textContent = product.title;
    description.textContent = product.description;
    imageURL.attributes["src"].textContent = product.image;

    firstVariantImage.attributes["src"].textContent = product.firstVariant.image;
    secondVariantImage.attributes["src"].textContent = product.secondVariant.image;
    thirdVariantImage.attributes["src"].textContent = product.thirdVariant.image;
    
    firstVariantTitle.textContent = product.firstVariant.title;
    secondVariantTitle.textContent = product.secondVariant.title;
    thirdVariantTitle.textContent = product.thirdVariant.title;
});


