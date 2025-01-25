const products = [
  {
    id: "p1",
    name: "Wireless Earbuds",
    image: "https://via.placeholder.com/150",
    description: "High-quality wireless earbuds with noise cancellation and long battery life.",
    price: 75,
    quantity: 50,
    onStock: true,
    categoryId: "c1",
  },
  {
    id: "p2",
    name: "Smartphone X12",
    image: "https://via.placeholder.com/150",
    description: "Latest smartphone with advanced features, 128GB storage, and AMOLED display.",
    price: 899,
    quantity: 30,
    onStock: true,
    categoryId: "c1",
  },
  {
    id: "p3",
    name: "4K Ultra HD TV",
    image: "https://via.placeholder.com/150",
    description: "65-inch 4K Ultra HD Smart TV with HDR and voice control.",
    price: 1200,
    quantity: 20,
    onStock: true,
    categoryId: "c3",
  },
  {
    id: "p4",
    name: "Gaming Laptop Z15",
    image: "https://via.placeholder.com/150",
    description: "Powerful gaming laptop with RTX 3080 GPU and 16GB RAM.",
    price: 1500,
    quantity: 10,
    onStock: true,
    categoryId: "c4",
  },
  {
    id: "p5",
    name: "Fitness Tracker Pro",
    image: "https://via.placeholder.com/150",
    description: "Waterproof fitness tracker with heart rate monitor and GPS.",
    price: 99,
    quantity: 100,
    onStock: true,
    categoryId: "c4",
  },
];



const categories = [
  {
    id: "c1",
    name: "Electronics",
  },
  {
    id: "c2",
    name: "Mobile Devices",
  },
  {
    id: "c3",
    name: "Televisions",
  },
  {
    id: "c4",
    name: "Gaming",
  }
];


const reviews = [
  {
    id: "r1",
    review: "Excellent sound quality and very comfortable to wear.",
    rating: 5,
    date: "2023-01-15",
    productId: "p1",
  },
  {
    id: "r2",
    review: "Great battery life but could use better noise cancellation.",
    rating: 4,
    date: "2023-02-10",
    productId: "p1",
  },
  {
    id: "r3",
    review: "The display is amazing, and the performance is top-notch.",
    rating: 5,
    date: "2023-03-22",
    productId: "p2",
  },
  {
    id: "r4",
    review: "Good value for money but lacks some premium features.",
    rating: 3,
    date: "2023-04-18",
    productId: "p2",
  },
  {
    id: "r5",
    review: "Amazing picture quality and easy to set up.",
    rating: 5,
    date: "2023-05-05",
    productId: "p3",
  },
  {
    id: "r6",
    review: "Works great for gaming but a bit pricey.",
    rating: 4,
    date: "2023-06-12",
    productId: "p4",
  },
  {
    id: "r7",
    review: "Very accurate step tracking and lightweight design.",
    rating: 5,
    date: "2023-07-08",
    productId: "p5",
  },
  {
    id: "r8",
    review: "Easy to use and sync with my phone.",
    rating: 4,
    date: "2023-08-01",
    productId: "p5",
  },
];



export const db = {
  products,
  categories,
  reviews
};
