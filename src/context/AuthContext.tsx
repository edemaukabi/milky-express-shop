import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

interface AuthContextProps {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  loginWithGoogle: () => void;
  loginWithFacebook: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const saveToLocalStorage = (user: User | null) => {
    if (user) {
      localStorage.setItem("auth_user", JSON.stringify(user));
      localStorage.setItem("is_authenticated", "true");
    } else {
      localStorage.removeItem("auth_user");
      localStorage.removeItem("is_authenticated");
    }
  };

  const login = (user: User) => {
    setUser(user);
    saveToLocalStorage(user);
  };

  const logout = () => {
    setUser(null);
    saveToLocalStorage(null);
  };

  const loginWithGoogle = () => {
    const mockGoogleUser: User = { id: 1, name: "Google User" };
    login(mockGoogleUser);
  };

  const loginWithFacebook = () => {
    const mockFacebookUser: User = { id: 2, name: "Facebook User" };
    login(mockFacebookUser);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loginWithGoogle, loginWithFacebook, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
