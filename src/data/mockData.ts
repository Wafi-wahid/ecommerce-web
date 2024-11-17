import { Product, Category } from "../types";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    featured: true,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and sustainable organic cotton t-shirt.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    featured: true,
  },
  {
    id: 3,
    name: "Smart Watch Pro",
    price: 299.99,
    description: "Advanced smartwatch with health tracking and notifications.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    featured: true,
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 49.99,
    description: "Genuine leather wallet with multiple card slots.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    featured: false,
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    description: "Lightweight and comfortable running shoes.",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    featured: true,
  },
  {
    id: 6,
    name: "Backpack",
    price: 79.99,
    description: "Durable backpack with laptop compartment.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    featured: false,
  },
];

export const mockCategories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
  },
  {
    id: 4,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
  },
];
