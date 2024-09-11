import {
  Box,
  Container,
  Grid2,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  useTheme,
  Rating,
  Tooltip,
} from "@mui/material";
import { tokens } from "../../theme";
import { useProducts } from "../../services/queries";
import { useEffect, useRef, useState } from "react";
import ProductTitleWithTooltip from "./productTitleWithTooltip";
import { useCart } from "../../context/cartProvider";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const productsQuery = useProducts();
  const { addToCart } = useCart();

  return (
    <Box display="flex">
      <Grid container spacing={8} m="0 30px 30px 0">
        {productsQuery.data?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              className={`card_${product.id}`}
              sx={{
                backgroundColor: colors.primary[900],
                height: "100%",
              }}
              raised
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
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <ProductTitleWithTooltip title={product.title} />

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
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Products;
