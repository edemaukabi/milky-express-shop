import React from "react";
import { CartProvider } from "./AppContext";
import { AuthProvider } from "./AuthContext";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};
