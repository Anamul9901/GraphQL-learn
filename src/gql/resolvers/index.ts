import { db } from "../../db.js";

// array data resolvers Query te add kore dete hobe.
export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      const result = db.products.find(
        (product) => product.id === args.productId
      );
      return result;
    },

    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return db.categories.find((category) => category.id === args.categoryId);
    },
  },

  // relation query between product and category
  Product: {
    category: (parent, args, context) => {
    //   console.log(parent.categoryId);
      return db.categories.find((category)=> category.id === parent.categoryId);
    },
  },
};
