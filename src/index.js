import {getProductData} from "./api.js";

// Selecting DOM elements

const title = document.querySelector(".title");
const description = document.querySelector(".description");
const imageURL = document.querySelector(".main-image");

const selection = document.getElementById("variant-selection");
const price = document.querySelector(".price");
const currency = document.querySelector(".currency");
const variantTitle = document.querySelector(".variant-name").children[0];


// Writing a function to handle variant display to the DOM

let variantValues = [];

const assignVariants = (item) => {

    let numberOfVariants = item.variants.length;


    for (let i = 0; i < numberOfVariants; i++) {

        let variantTitles = item.variants[i].title;
        let variantID = item.variants[i].id;
        let variantImage = item.variants[i].image.url
        let variantPrice = item.variants[i].price.amount
        let variantCurrency = item.variants[i].price.currencyCode

        variantValues.push({"id" : variantID, "image": variantImage, "price": variantPrice, "currency": variantCurrency, "name": variantTitles})

        // Assigning value attribute to options
        const options = document.createElement("option");
        options.setAttribute("value", `${variantID}`);
        options.textContent = `${variantTitles}`
        selection.append(options);

    }
}

// Writing a function to change DOM elements on form selection


const changeVariant = (event) => {

    for (let i = 0; i < variantValues.length; i++) {
        if (event.target.value === variantValues[i].id) {
            imageURL.attributes["src"].textContent = variantValues[i].image;
            price.textContent = variantValues[i].price;
            currency.textContent = variantValues[i].currency;
            variantTitle.textContent = variantValues[i].name
        }
    }

}


getProductData().then((product) => {
    title.textContent = product.title;
    description.textContent = product.description;
    imageURL.attributes["src"].textContent = product.image;

    assignVariants(product)

    selection.addEventListener("change", changeVariant)

});



// Loop in api.js to get all variants - leverage product IDs
// Change logic in index.js to get all variants with a loop
// Create another .js file for modular approach - build variants programmatically


