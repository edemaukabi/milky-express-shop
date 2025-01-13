import React, { useState } from "react";

interface CheckoutProps {
  subTotal: number;
  shipping: number;
  discount: number;
}

const Checkout: React.FC<CheckoutProps> = ({ subTotal, shipping, discount }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [coupon, setCoupon] = useState("");

  const total = subTotal + shipping - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-grayDark rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>
      <p className="text-center text-gray-600 mb-8">
        Complete your purchase by filling in the details below.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
          <textarea
            placeholder="Additional Information"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
          ></textarea>
        </div>

        <div className="sm:col-span-2">
          <input
            type="text"
            placeholder="Coupon (Optional)"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
          />
        </div>

        <div className="sm:col-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
          <div className="flex justify-between mb-4">
            <span className="font-medium text-gray-700">Subtotal</span>
            <span className="font-medium text-gray-700">${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-medium text-gray-700">Shipping</span>
            <span className="font-medium text-gray-700">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="font-medium text-gray-700">Discount</span>
            <span className="font-medium text-gray-700">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6 border-t pt-4">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-lg text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="sm:col-span-2 flex justify-between items-center">
          <button
            type="submit"
            className="bg-bloodRed text-white px-6 py-3 rounded-md text-xl hover:bg-red-600 transition-all"
          >
            Pay ${total.toFixed(2)}
          </button>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">🔑</span>
            <span>Payments are secure and encrypted</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
