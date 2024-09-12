import { useParams } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const productId = Number(id);
  
  if (isNaN(productId)) {
    throw new Error("Product ID is not a valid number");
  }
  return <>{id}</>;
};
export default ProductView;
