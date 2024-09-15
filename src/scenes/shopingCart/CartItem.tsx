import { Box, Typography } from "@mui/material";
import { Product } from "../../types/product";
import Divider from "@mui/material/Divider";

interface ProductProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<ProductProps> = ({
  product,
  quantity,
}: ProductProps) => {
  return (
    <Box gap='8px' sx={{ borderColor: "divider", m: "5px" }} display="flex">
      {/* IMAGE */}
      <Box
        component="img"
        sx={{
          maxWidth: "15%", // Full width of the parent container
          objectFit: "contain", // Ensures the image fits well within the container
        }}
        alt="Descriptive Alt Text"
        src={product?.image}
      />
      <Typography variant="h5" maxWidth="50%">{product.title}</Typography>
      {/* <Typography>{`${quantity}`}</Typography>
      <Typography>{`Product: ${JSON.stringify(product)}`}</Typography> */}
      
    </Box>
    
  );
};

export default CartItem;
