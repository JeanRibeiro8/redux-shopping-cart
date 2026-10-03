import type { Product } from "./types"

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    description: "High quality sound and comfort for your daily life.",
    image: "/products/headphones.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 129.99,
    category: "Electronics",
    description: "Track your health, stay connected and more.",
    image: "/products/watch.jpg",
  },
  {
    id: 3,
    title: "Casual Sneakers",
    price: 69.99,
    category: "Fashion",
    description: "Comfort and style for any occasion.",
    image: "/products/sneakers.jpg",
  },
  {
    id: 4,
    title: "Travel Backpack",
    price: 49.99,
    category: "Bags",
    description: "Spacious, durable and perfect for travel.",
    image: "/products/backpack.jpg",
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 39.99,
    category: "Accessories",
    description: "UV protection with a modern style.",
    image: "/products/sunglasses.jpg",
  },
  {
    id: 6,
    title: "Water Bottle",
    price: 24.99,
    category: "Sports",
    description: "Keep your drinks cold or hot for hours.",
    image: "/products/bottle.jpg",
  },
]
