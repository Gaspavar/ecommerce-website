import {getProductData} from "./api.js";

// Selecting DOM elements

const title = document.querySelector(".title");
const description = document.querySelector(".description");
const imageURL = document.querySelector(".main-image");

const firstVariantTitle = document.querySelector(".first-variant-title")
const secondVariantTitle = document.querySelector(".second-variant-title")
const thirdVariantTitle = document.querySelector(".third-variant-title")

const variantSelection = document.querySelector("#variant-selection")


getProductData().then((product) => {
    title.textContent = product.title;
    description.textContent = product.description;
    imageURL.attributes["src"].textContent = product.image;

    firstVariantTitle.textContent = product.firstVariant.title;
    secondVariantTitle.textContent = product.secondVariant.title;
    thirdVariantTitle.textContent = product.thirdVariant.title;

    // Writing a function to change image displayed depending on the variant selected

    const changeImageURL = (variant) => {
        if (variant.target.value === "green") {
            imageURL.attributes["src"].textContent = product.firstVariant.image;
        } else if (variant.target.value === "olive") {
            imageURL.attributes["src"].textContent = product.secondVariant.image;
        } else if (variant.target.value === "ocean") {
            imageURL.attributes["src"].textContent = product.thirdVariant.image;
        }
    }

    variantSelection.addEventListener("change", changeImageURL)
});


// Loop in api.js to get all variants - leverage product IDs
// Change logic in index.js to get all variants with a loop
// Create another .js file for modular approach - build variants programmatically


