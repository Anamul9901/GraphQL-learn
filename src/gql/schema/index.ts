// aikhane type define krte hobe. object e ke ke key thakbe. then Query type e add kore dete hobe.
export const typeDefs = `#graphql
  type Product {    
    id: ID!
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    onStock: Boolean
    category: String
    }

  type Query {
    products: [Product]
    product(productId: ID!): Product
  }
`;