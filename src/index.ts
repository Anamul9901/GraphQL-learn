import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./db.js";

// aikhane type define krte hobe. object e ke ke key thakbe. then Query type e add kore dete hobe.
const typeDefs = `#graphql
  type Product {    
    id: ID!,
    name: String,
    image: String,
    description: String,
    price: Float,
    quantity: Int,
    onStock: Boolean,
    category: String,
    }

  type Query {
    products: [Product]
  }
`;

// array data resolvers Query te add kore dete hobe.
const resolvers = {
  Query: {
    products: () => db.products,
  },
};

// inostance er  madhome server create kore dete hobe.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
