import { Product } from "./product";
import { ShoppingList } from "./shoppingList";

export interface ShoppingListContextType {
  shoppingList: ShoppingList;
  addToShoppingList: (product: Product) => void;
  removeFromShoppingList: (productId: number) => void;
}
