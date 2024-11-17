import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { mockProducts } from "../data/mockData";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product not found
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-gray-600 hover:text-gray-900 flex items-center"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-3xl font-bold text-blue-600">${product.price}</p>
          <div className="border-t border-b py-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {product.category}
            </span>
          </div>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-6 h-6" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
