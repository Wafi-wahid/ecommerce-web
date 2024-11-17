import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { mockProducts, mockCategories } from "../data/mockData";

export const Home = () => {
  const featuredProducts = mockProducts.filter((product) => product.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero"
          className="w-full h-[600px] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to ModernShop</h1>
            <p className="text-xl mb-8">
              Discover our amazing collection of products
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            View All
            <ArrowRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};
