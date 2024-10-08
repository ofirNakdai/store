import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { useCart } from "../../context/cartProvider";
import { useProductsByIds } from "../../services/queries";
import { ContactSupportOutlined } from "@mui/icons-material";
import CartItem from "./CartItem";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Divider from "@mui/material/Divider";
import Footer from "../../components/Footer";
import { useState } from "react";
import PaymentFormRHF from "../payment.tsx/paymentForm-rhf.tsx";

const Cart = () => {
  const { cart, totalAmount, totalQuantity, clearCart } = useCart();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const productsQuery = useProductsByIds(
    Object.keys(cart).map((key) => Number(key))
  );

  const isEmptyCart = Object.keys(cart).length === 0;
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckoutClick = () => {
    setCheckoutOpen(true);
  };

  const handleClose = () => {
    setCheckoutOpen(false);
  };

  return (
    <Box sx={{ m: "10px 20px" }} gap="10px">
      <Typography variant="h2">Shopping Cart</Typography>

      {/* MAIN */}
      <Box display="flex" pt="10px">
        {/* CART ITEMS */}
        <Box
          display="flex"
          flexDirection="column"
          width="80%"
          sx={{
            background: colors.primary[400],
            height: "70vh",
            overflowY: "auto",
          }}
        >
          {isEmptyCart ? (
            <Typography variant="h6" sx={{ m: "20px", textAlign: "center" }}>
              Your cart is empty.
            </Typography>
          ) : (
            productsQuery.map((item) =>
              item.data ? (
                <CartItem
                  key={item.data.id}
                  product={item.data}
                  quantity={cart[item.data.id]["quantity"]}
                />
              ) : null
            )
          )}
        </Box>
        <Divider
          sx={{ border: "2px solid", borderColor: "divider", m: "3px" }}
        />

        {/* CHECKOUT */}
        <Box
          p="8px 20px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="20%"
          height="70vh"
          sx={{ background: colors.primary[400] }}
        >
          {/* SUBTOTAL */}
          <Box>
            <Typography variant="h4">Subtotal</Typography>
            <Typography variant="h3" fontWeight="bold">{`$${totalAmount.toFixed(
              2
            )}`}</Typography>
            <Typography variant="h6">{`${totalQuantity} items`}</Typography>
          </Box>

          {/* CHECKOUT BUTTON */}
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blue[500],
                color: theme.palette.mode === "light" ? "black" : "white",

                "&:hover": {
                  backgroundColor: colors.blue[600],
                },
                borderRadius: "4px",
              }}
              onClick={handleCheckoutClick}
              disabled={totalQuantity == 0}
            >
              checkout
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Checkout Model */}
      <Dialog open={checkoutOpen} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogContent>
          <PaymentFormRHF
            setDialogOpen={setCheckoutOpen}
            clearCart={clearCart}
          />
          {/* <PaymentForm /> */}
        </DialogContent>
      </Dialog>

      {/* FOOTER
      <Box>
        <Divider variant="middle" sx={{ color: "divider", mt: "20px" }} />
        <Footer />
      </Box> */}
    </Box>
  );
};
export default Cart;
