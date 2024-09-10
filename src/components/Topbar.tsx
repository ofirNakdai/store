import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import { useShoppingList } from "../context/shopingList";
import {
  getTotalCartCost,
  getTotalItemsInCart,
} from "../services/functionsUtil";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as "light" | "dark");
  const colorMode = useContext(ColorModeContext);
  const { shoppingList } = useShoppingList();
  let totalItemsInCart = getTotalItemsInCart(shoppingList);
  let totalCartCost = getTotalCartCost(shoppingList);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: colors.primary[400],
      }}
    >
      {/* Name */}
      <Box
        display="flex"
        sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "5px",
        }}
      >
        <Typography variant="h2">Hafifa Store</Typography>
      </Box>

      {/* SHOPPING LIST AND THEME */}
      <Box display="flex" alignItems="center" justifyContent="inherit">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="8px"
        >
          <Typography variant="h4" p="4px">
            {`$${totalCartCost}`}
          </Typography>
          <Typography variant="h6" p="4px">
            {`(${totalItemsInCart})`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
