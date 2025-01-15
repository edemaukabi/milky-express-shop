import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface CheckoutProps {
  subTotal: number;
  shipping: number;
  discount: number;
}

const Checkout: React.FC<CheckoutProps> = ({
  subTotal,
  shipping,
  discount,
}) => {
  const navigate = useNavigate();

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
  const [error, setError] = useState("");

  const total = subTotal + shipping - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !country ||
      !state ||
      !city
    ) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");
    toast.info("submitting order");
    navigate("/order-complete");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-grayDark rounded-lg">
      <h2 className="text-2xl text-black font-semibold">Checkout</h2>
      <p className="text-lightGray mb-8">
        Complete your purchase by filling in the details below.
      </p>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <div className="sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <h3 className="text-md font-medium text-black mb-4">
            Shipping Address
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
            />
          </div>
          <textarea
            placeholder="Additional Information"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="mt-4 w-full p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
          ></textarea>
        </div>

        <div className="sm:col-span-2">
          <input
            type="text"
            placeholder="Coupon (Optional)"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="w-full p-2.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloodRed"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex justify-between mb-4 mt-4">
            <span className="font-medium text-black">Subtotal</span>
            <span className="font-medium text-black">
              N{subTotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-medium text-black">Shipping</span>
            <span className="font-medium text-black">
              N{shipping.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="font-medium text-black">Discount</span>
            <span className="font-medium text-black">
              -N{discount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-6 border-t pt-4">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-semibold text-lg text-gray-900">
              N{total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="bg-bloodRed w-full text-white px-4 py-2 rounded-md text-xl hover:bg-red-600 transition-all"
          >
            Pay N{total.toFixed(2)}
          </button>
          <div className="text-center text-sm text-gray-500 mt-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 116 0v3H9zm3 4a2 2 0 11.001 3.999A2 2 0 0112 14z" />
            </svg>
            <span>Payments are secure and encrypted</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
