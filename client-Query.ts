
// localHost ba client theke aivabe query krte hobe.

// 1: find all product name, price and type
// query Products {
  //   products {
    //     name
    //     price
    //     __typename // er maddhome data er type dekha jabe.
    //   }
    // }


  // 2: get single product by id
  // query product($productId: ID!) {
  //   product(productId: $productId) {
  //     name
  //   }
  // }