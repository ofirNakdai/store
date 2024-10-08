import { Box, Link, Typography, useTheme } from "@mui/material";
import { Product } from "../../types/product";
import Divider from "@mui/material/Divider";
import QuantityPicker from "../../components/QuantityPicker";
import { useCart } from "../../context/cartProvider";
import Swal from "sweetalert2";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<ProductProps> = ({
  product,
  quantity,
}: ProductProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    increaseQuantityToProduct,
    decreaseQuantityToProduct,
    removeFromCart,
  } = useCart();
  const navigate = useNavigate();

  function handleIncrementClick(): void {
    quantity++;
    increaseQuantityToProduct(product);
  }
  function handleDecrementClick(): void {
    if (quantity - 1 == 0) {
      handleRemoveProduct();
    } else {
      quantity--;
      decreaseQuantityToProduct(product);
    }
  }
  function handleRemoveProduct() {
    console.log(`trying to remove product: ${product.id}`);
    Swal.fire({
      title: "Remove From Cart?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: theme.palette.mode === "light" ? "#fcfcfc" : colors.grey[800],
      color: colors.grey[100],
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(product);
        Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
          background:
            theme.palette.mode === "light" ? "#fcfcfc" : colors.grey[800],
          color: colors.grey[100],
        });
      }
    });
  }
  const handleNavigate = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <Box
        gap="8px"
        sx={{ borderColor: "divider", m: "5px", height: "20vh" }}
        display="flex"
        justifyContent="space-evenly"
      >
        {/* IMAGE */}
        <Box
          component="img"
          sx={{
            maxWidth: "15%", // Full width of the parent container
            objectFit: "contain", // Ensures the image fits well within the container
            cursor: "pointer",
          }}
          alt="Descriptive Alt Text"
          src={product?.image}
          onClick={() => handleNavigate(product)}
        />

        {/* TITLE */}
        <Box alignContent="center" width="100%">
          <Typography
            variant="h4"
            maxWidth="85%"
            sx={{ cursor: "pointer" }}
            onClick={() => handleNavigate(product)}
          >
            {product.title}
          </Typography>
        </Box>

        {/* QUANTITY PICKER */}
        <Box alignContent="center">
          <QuantityPicker
            quantity={quantity}
            onIncrement={handleIncrementClick}
            onDecrement={handleDecrementClick}
          />
        </Box>

        {/* PRICE AND DELETE */}
        <Box alignItems="center" alignContent="center" sx={{ width: "10%" }}>
          <Typography fontWeight="bold">{`$${product.price}`}</Typography>
          <Typography
            sx={{
              color: "#D32F2F",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={handleRemoveProduct}
          >
            Delete
          </Typography>
        </Box>
      </Box>
      <Divider variant="middle" />
    </>
  );
};

export default CartItem;
