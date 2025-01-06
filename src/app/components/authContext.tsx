"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cartSlice from "@/redux/slices/cartslice";

// Define the shape of the user object
interface User {
  displayname: string;
  avatar?: string;
  _id: string;
}

// Define the shape of the context value
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  // Load user from local storage if available
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      dispatch(cartSlice.actions.setUserId(parsedUser._id));
    }
  }, [dispatch]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(cartSlice.actions.setUserId(userData?._id));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    dispatch(cartSlice.actions.setUserId(null));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
