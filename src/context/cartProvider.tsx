import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { Product } from "../types/product";

interface CartProductInfo {
  quantity: number;
  productPrice: number;
}

// Define a type for the cart, where product.id maps to the quantity
interface Cart {
  [productId: number]: CartProductInfo;
}

// Define the type for the context value
interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, amount: number) => void;
  totalAmount: number;
  totalQuantity: number;
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
}

// Function to calculate the total amount
const calculateTotalAmount = (cart: Cart): number => {
  return Object.values(cart).reduce((total, cartProductInfo) => {
    return total + cartProductInfo.productPrice * cartProductInfo.quantity;
  }, 0); // Initial total is 0
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>({});
  const totalAmount = useMemo<number>(() => calculateTotalAmount(cart), [cart]);
  const totalQuantity = useMemo<number>(() => {
    return Object.keys(cart).length;
  }, [cart]); // Initial total is 0

  const addToCart = (product: Product, amount: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        quantity: (prevCart[product.id]?.quantity || 0) + amount,
        productPrice: product.price,
      },
    }));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalAmount, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
