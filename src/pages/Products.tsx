import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { mockProducts } from "../data/mockData";
import { Product } from "../types";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const categoryFilter = searchParams.get("category");

  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Apply price filter
    switch (priceRange) {
      case "under50":
        filtered = filtered.filter((p) => p.price < 50);
        break;
      case "50to100":
        filtered = filtered.filter((p) => p.price >= 50 && p.price <= 100);
        break;
      case "over100":
        filtered = filtered.filter((p) => p.price > 100);
        break;
    }

    // Apply sorting
    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [categoryFilter, sortBy, priceRange]);

  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          {categoryFilter
            ? `${
                categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)
              } Products`
            : "All Products"}
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="name">Name</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="all">All Prices</option>
            <option value="under50">Under $50</option>
            <option value="50to100">$50 to $100</option>
            <option value="over100">Over $100</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No products found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};
