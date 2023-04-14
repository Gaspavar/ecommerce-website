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

const productInfo = 
{
    title: response.product.title,
    description: response.product.description,
    image: response.product.featuredImage.url,
    firstVariant: {
      title: response.product.variants.edges[0].node.title,
      image: response.product.variants.edges[0].node.image.url,
      price: response.product.variants.edges[0].node.price.amount,
      currency: response.product.variants.edges[0].node.price.currencyCode
    },
  
    secondVariant: {
      title: response.product.variants.edges[1].node.title,
      image: response.product.variants.edges[1].node.image.url,
      price: response.product.variants.edges[1].node.price.amount,
      currency: response.product.variants.edges[1].node.price.currencyCode
    },
    thirdVariant: {
      title: response.product.variants.edges[2].node.title,
      image: response.product.variants.edges[2].node.image.url,
      price: response.product.variants.edges[2].node.price.amount,
      currency: response.product.variants.edges[2].node.price.currencyCode
    }
}
return productInfo;
}

export {getProductData};