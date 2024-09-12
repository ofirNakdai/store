import { useParams } from "react-router-dom";
import { useProduct } from "../../services/queries";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

const ProductView = () => {
  const { id } = useParams();
  const productId = Number(id);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (isNaN(productId)) {
    throw new Error("Product ID is not a valid number");
  }
  const productQuery = useProduct(productId);
  const product = productQuery.data;
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

  return (
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
        <Box>
          <Button
            sx={{
              background: colors.red[500],
              color: colors.grey[100],
              "&:hover": { backgroundColor: colors.red[600] },
            }}
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductView;
