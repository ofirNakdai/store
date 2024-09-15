import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/cartProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as "light" | "dark");
  const colorMode = useContext(ColorModeContext);
  const { totalAmount, totalQuantity } = useCart();
  const navigate = useNavigate();

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
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h2">Hafifa Store</Typography>
        </Link>
      </Box>

      {/* SHOPPING CART AND THEME */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="8px"
        >
          <Typography variant="h4" p="4px">
            {`$${totalAmount.toFixed(2)}`}
          </Typography>
          <Typography variant="h6" p="4px">
            {`(${totalQuantity})`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
