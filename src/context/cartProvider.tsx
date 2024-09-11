import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/product";
import { getProducts } from "../services/api";

// Define a type for the cart, where product.id maps to the quantity
interface Cart {
  [productId: number]: number;
}

// Define the type for the context value
interface CartContextType {
  cart: Cart;
  addToCart: (product: Product) => void;
  totalAmount: number;
}

// Create the CartContext with a default value
const CartContext = createContext<CartContextType | null>(null);

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap your app
interface CartProviderProps {
  children: ReactNode;
  products: Product[] | undefined;
}

export const CartProvider = ({ children, products }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>({});

  const addToCart = (product: Product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + 1,
    }));
  };

  const totalAmount = Object.entries(cart).reduce(
    (total, [productId, quantity]) => {
      const product = products!.find(
        (product) => product.id === Number(productId)
      );
      return product ? total + product.price * quantity : total;
    },
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
