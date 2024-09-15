import { Box, Container, Typography } from "@mui/material";
import { useCart } from "../../context/cartProvider";
import { useProductsByIds } from "../../services/queries";
import { ContactSupportOutlined } from "@mui/icons-material";
import CartItem from "./CartItem";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Divider from "@mui/material/Divider";

const Cart = () => {
  const { cart } = useCart();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const productsQuery = useProductsByIds(
    Object.keys(cart).map((key) => Number(key))
  );

  return (
    <Box sx={{ m: "10px 20px" }} gap="10px">
      <Typography variant="h3">Shopping List</Typography>

      {/* MAIN */}
      <Box display="flex" pt="10px">
        {/* CART ITEMS */}
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="60%"
          sx={{ background: colors.primary[400] }}
        >
          {productsQuery.map((item) =>
            item.data ? (
              <CartItem
                key={item.data.id}
                product={item.data}
                quantity={cart[item.data.id]["quantity"]}
              />
            ) : null
          )}
        </Box>
        <Divider sx={{ border: "2px solid", borderColor: "divider" }} />
        {/* CHECKOUT */}
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="30%"
          sx={{ background: colors.primary[400] }}
        >
          Ofir-----------------------------------------------------------------------------
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
