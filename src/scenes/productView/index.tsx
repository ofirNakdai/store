import { useParams } from "react-router-dom";
import { useProduct } from "../../services/queries";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import QuantityPicker from "../../components/QuantityPicker";
import { useState } from "react";
import { useCart } from "../../context/cartProvider";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";

const ProductView = () => {
  const { id } = useParams();
  const productId = Number(id);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  if (isNaN(productId)) {
    throw new Error("Product ID is not a valid number");
  }
  const productQuery = useProduct(productId);
  const product = productQuery.data;

  {
    /* LOADING THE PAGE */
  }
  if (productQuery.isPending) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh" // Makes the Box take the full viewport height
        width="100vw" // Makes the Box take the full viewport width
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (!product) {
    throw new Error("404 - Product ID Not Found");
  }

  const handleIncrementClick = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrementClick = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };
  const handleAddToCart = () => {
    addToCart(product, quantity);
    Swal.fire({
      text: "The product has been added to your cart.",
      icon: "success",
      timer: 3000, // 3 seconds
      showConfirmButton: false, // Hide the confirm button
      position: "bottom-start", // Position at the bottom left
      toast: true, // Makes the alert look smaller, like a toast notification
      background: theme.palette.mode === "light" ? "#fcfcfc" : colors.grey[800],
      color: colors.grey[100],
    });
    setQuantity(1);
  };

  return (
    <Box>
      <div>
        <Box display="flex" gap="30px" mt="40px" ml="40px">
          {/* IMAGE */}
          <Box
            component="img"
            sx={{
              maxWidth: "100%", // Full width of the parent container
              maxHeight: "75vh", // Limit the height
              objectFit: "contain", // Ensures the image fits well within the container
            }}
            alt="Descriptive Alt Text"
            src={product?.image}
          />

          {/* DETAILS */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            pt="53px"
            pb="101px"
          >
            <Box maxWidth="85vh">
              <Box display="flex">
                <Rating
                  name="half-rating-read"
                  value={product?.rating.rate}
                  precision={0.5}
                  size="small"
                  readOnly
                />
                <Typography
                  variant="body1"
                  fontSize="11px"
                  color="primary"
                >{`(${product?.rating.count})`}</Typography>
              </Box>
              <Typography variant="h1">{product?.title}</Typography>
              <Typography variant="h5">Availability (In Stock)</Typography>
              <Typography
                variant="h2"
                p="8px 0"
                color="#FFAB00"
              >{`$${product?.price.toFixed(2)}`}</Typography>
              <Typography variant="h6">{product?.description}</Typography>
            </Box>

            {/* BUTTONS */}
            <Box display="flex" mt="8px">
              <QuantityPicker
                quantity={quantity}
                onIncrement={handleIncrementClick}
                onDecrement={handleDecrementClick}
              />
              <Button
                sx={{
                  ml: "8px",
                  background: colors.red[500],
                  color: colors.grey[100],
                  "&:hover": { backgroundColor: colors.red[600] },
                }}
                onClick={handleAddToCart}
                disabled={quantity <= 0}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </div>

      <footer>
        <Divider variant="middle" sx={{ color: "divider", mt: "20px" }} />
        <Box>
          <Footer />
        </Box>
      </footer>
    </Box>
  );
};
export default ProductView;
