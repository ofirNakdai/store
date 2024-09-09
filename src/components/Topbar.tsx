import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode as "light" | "dark");
  const colorMode = useContext(ColorModeContext);
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

      {/* Icons Section */}
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
        <Box display="flex" justifyContent="space-between" alignItems="center" p="8px">
          <Typography variant="h4" p="4px">$100</Typography>
          <Typography variant="h6" p="4px">(0)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
