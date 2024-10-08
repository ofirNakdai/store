import { Outlet } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import { Box, Divider } from "@mui/material";

const BaseLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
      <Divider variant="middle" sx={{ color: "divider", mt: "20px" }} />
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default BaseLayout;
