import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useTheme,
  Rating,
  CircularProgress,
  Divider,
} from "@mui/material";
import { tokens } from "../../theme";
import { useProducts } from "../../services/queries";
import ProductTitleWithTooltip from "./productTitleWithTooltip";
import { useCart } from "../../context/cartProvider";
import Swal from "sweetalert2";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useEffect } from "react";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const productsQuery = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (productsQuery.isPending) {
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

  const handleAddToCartButtonClick = (product: Product) => {
    addToCart(product, 1);
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
  };
  const handleNavigate = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Grid container spacing={8} m="0 0" p="0 64px 0 0" maxWidth="100%">
        {productsQuery.data?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              className={`card_${product.id}`}
              sx={{
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                title={product.title}
                sx={{
                  objectFit: "contain",
                  height: "200px",
                  width: "100%",
                  alt: "alt",
                  cursor: "pointer",
                }}
                onClick={() => handleNavigate(product)}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  onClick={() => handleNavigate(product)}
                  sx={{ cursor: "pointer" }}
                >
                  <ProductTitleWithTooltip title={product.title} />
                </Box>

                {/* RATING */}
                <Box display="flex" justifyContent="left">
                  <Rating
                    name="half-rating-read"
                    value={product.rating.rate}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <Typography
                    variant="body1"
                    fontSize="11px"
                    color="primary"
                  >{`(${product.rating.count})`}</Typography>
                </Box>

                {/* PRICE */}
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  sx={{ mt: "5px" }}
                >
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body1" fontSize="11px" color="primary">
                      Price
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                    >{`$${product.price.toFixed(2)}`}</Typography>
                  </Box>
                  {/* ADD TO CART BUTTON */}
                  <Button
                    sx={{
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? colors.grey[900]
                          : colors.grey[700],
                      color: colors.grey[100],
                      "&:hover": {
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? colors.grey[800]
                            : colors.grey[600], // Background color on hover
                      },
                      borderRadius: "6px",
                    }}
                    onClick={() => {
                      handleAddToCartButtonClick(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FOOTER */}
      <Divider variant="middle" sx={{ color: "divider", mt: "20px" }} />
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
export default Products;
