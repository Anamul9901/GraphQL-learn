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

  // relation query er khetre main query er bahire relation query gula add krte hoi.
  // relation query between product with category (Onet-To-One)
  Product: {
    category: (parent, args: any, context: any) => {
      //   console.log(parent.categoryId);
      return db.categories.find(
        (category) => category.id === parent.categoryId
      );
    },
    // reviews: (parent, args, context)=>{
    reviews: ({ id }, args: any, context: any) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },

  // relation query between category with product (One-To-Many)
  Category: {
    // products: (parent, args: any, context: any) => {
    products: ({id}, args: any, context: any) => {
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
