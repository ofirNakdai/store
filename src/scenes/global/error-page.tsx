import { Box, Typography, useTheme } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import { tokens } from "../../theme";

interface ErrorPageProps {
  customMessage?: string;
}

export default function ErrorPage({ customMessage }: ErrorPageProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <Box
      id="error-page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="10px"
    >
      <Typography variant="h1">Oops!</Typography>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{customMessage || error?.statusText || error?.message}</i>
      </p>
      <p>
        <Link
          style={{
            color: "inherit",
          }}
          to="/products"
        >
          return to main page
        </Link>
      </p>
    </Box>
  );
}
