import { request, gql } from "graphql-request/build/esm";

const getProductData = async () => {

const query = gql`
  {
    product(id: "gid://shopify/Product/7982905098262") {
      id
      title
      description
      featuredImage {
        id
        url
      }
      variants(first: 15) {
        edges {
          cursor
          node {
            id
            title
            image {
              url
            }
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
const response = await request("https://mock.shop/api", query);

// Pulled relevant data from API

const variants = [];

for (let i = 0; i < response.product.variants.edges.length; i++) {
  variants.push(response.product.variants.edges[i].node);
}

const productInfo = 
{
    title: response.product.title,
    description: response.product.description,
    image: response.product.featuredImage.url,
    variants: variants
}
return productInfo;
}

export {getProductData};