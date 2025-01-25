import { db } from "../../db.js";

// array data resolvers Query te add kore dete hobe.
export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args:{productId: string}, context: any) => {
      const result = db.products.find((product)=> product.id === args.productId);
      return result
    },
  },
};