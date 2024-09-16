import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material";
import { tokens } from "./../theme"; // Assuming you have a custom theme

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        p: "20px",
        mt: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: colors.grey[100] }}>
        Hafifa Store
      </Typography>

      <Typography variant="body2" sx={{ color: colors.grey[300], mb: "10px" }}>
        © {new Date().getFullYear()} Ofir Nakdai & Sons. All rights reserved.
      </Typography>

      <Box>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
          sx={{ color: colors.grey[100] }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
          sx={{ color: colors.grey[100] }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
          sx={{ color: colors.grey[100] }}
        >
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
