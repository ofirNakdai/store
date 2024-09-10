import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingListContextType } from "../types/shopingListContext";
import { Product } from "../types/product";
import { ShoppingList } from "../types/shoppingList";

// Create the context with default values
const ShoppingListContext = createContext<ShoppingListContextType | undefined>(
  undefined
);

// Custom hook to use the context
export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error(
      "useShoppingList must be used within a ShoppingListProvider"
    );
  }
  return context;
};

// Provider component
export const ShoppingListProvider = ({ children }: { children: ReactNode }) => {
  const [shoppingList, setShoppingList] = useState<ShoppingList>({});

  const addToShoppingList = (product: Product) => {
    setShoppingList((prevList) => ({
      ...prevList,
      [product.id]: (prevList[product.id] ? prevList[product.id] : 0) + 1, // Increment count if product exists, otherwise set to 1
    }));
  };

  const removeFromShoppingList = (productId: number) => {
    setShoppingList((prevList) => {
      const updatedList = { ...prevList };
      if (updatedList[productId] > 1) {
        updatedList[productId]--; // Decrease the count
      } else {
        delete updatedList[productId]; // Remove product if count becomes 0
      }
      return updatedList;
    });
  };

  return (
    <ShoppingListContext.Provider value={{ shoppingList, addToShoppingList, removeFromShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  );
};