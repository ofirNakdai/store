import { ShoppingList } from "../types/shoppingList";
import { useProduct } from "./queries";

const getProductPrice = (id: number): number => {
  const productQuery = useProduct(id);
  return productQuery.data?.price!;
};

export function getTotalItemsInCart(shoppingList: ShoppingList) {
  return Object.values(shoppingList).reduce((total, count) => total + count, 0);
}

export function getTotalCartCost(shoppingList: ShoppingList) {
  // let total = Object.values(shoppingList).reduce(
  //   (total, [productId, count]) => {
  //     console.log(productId);
  //     const price = getProductPrice(productId);
  //     return total + price! * count;
  //   },
  //   0
  // );
  let total: number = 0;
  Object.entries(shoppingList).forEach((entry) => {
    const price = getProductPrice(Number(entry[0]));
    total += price * entry[1];
    console.log(total);
  });
  return total;
}
