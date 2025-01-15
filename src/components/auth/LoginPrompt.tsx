import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPrompt: React.FC = () => {
  const { loginWithGoogle, loginWithFacebook, login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle();
    toast.success("Login with Google successful!");
    navigate("/order-complete");
  };

  const handleFacebookLogin = () => {
    loginWithFacebook();
    toast.success("Login with Facebook successful!");
    navigate("/order-complete");
  };

  const handleManualLogin = () => {
    login({ id: 3, name: "Manual User" });
    toast.success("Login successful!");
    navigate("/order-complete");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Login</h2>
      <p className="text-gray-600 text-md mb-6">
        Login to complete your order
      </p>

      <div className="space-y-4 mb-2">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-bloodRed text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.35 11.1H12v2.82h5.42c-.23 1.26-.91 2.33-1.95 3.04l2.93 2.27c1.74-1.6 2.96-3.96 2.96-6.8 0-.66-.07-1.31-.21-1.93z"
              fill="#4285F4"
            />
            <path
              d="M12 21.1c2.7 0 4.97-.88 6.63-2.39l-2.93-2.27c-.84.56-1.92.89-3.12.89-2.4 0-4.43-1.62-5.16-3.8H4.38v2.4c1.66 3.34 5.11 5.57 9.02 5.57z"
              fill="#34A853"
            />
            <path
              d="M6.84 13.52c-.22-.66-.34-1.36-.34-2.07s.12-1.41.34-2.07V6.98H4.38c-.73 1.46-1.15 3.11-1.15 4.87s.42 3.41 1.15 4.87l2.46-2.2z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.3c1.47 0 2.78.51 3.82 1.5l2.86-2.86C16.97 2.08 14.7 1 12 1 8.09 1 4.64 3.23 2.98 6.57l2.46 2.2c.73-2.17 2.76-3.8 5.16-3.8z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center bg-bloodRed text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.012 3.662 9.15 8.437 9.879v-6.987H7.898v-2.892h2.539V9.847c0-2.506 1.492-3.891 3.776-3.891 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.338 21.15 22 17.012 22 12z" />
          </svg>
          Continue with Facebook
        </button>
      </div>

      <div className="text-center text-gray-600">
        <p>
          Or use your password to{" "}
          <button onClick={handleManualLogin} className="text-blue-500 hover:underline">
            login
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPrompt;
