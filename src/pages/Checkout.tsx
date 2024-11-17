import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would:
    // 1. Validate the form
    // 2. Process the payment with Stripe
    // 3. Send the order to your backend
    // 4. Show a success message
    // For now, we'll just simulate a successful order
    alert("Order placed successfully!");
    dispatch({ type: "CLEAR_CART" });
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 mt-4"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-2"
                />
              </div>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                required
                value={formData.postalCode}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 mt-4"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Payment Information
              </h2>
              <div id="card-element" className="border rounded-lg p-4">
                {/* Stripe Elements will be inserted here */}
                <div className="bg-gray-100 p-4 rounded">
                  [Stripe Payment Form Would Be Integrated Here]
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>

        <div>
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
