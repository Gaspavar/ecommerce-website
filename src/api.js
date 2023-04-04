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
      variants(first: 3) {
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

const productInfo = {
    title: response.product.title,
    description: response.product.description,
    image: response.product.featuredImage.url
}
return productInfo;
}

export {getProductData};