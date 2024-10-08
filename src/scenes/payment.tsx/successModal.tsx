import { Box, Button, Dialog, Icon, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Dispatch, SetStateAction, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const SuccessModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setParentWindowOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  //   const [open, setOpen] = useState(false);
  const handleOpen = () => {
    props.setOpen(true);
  };
  const handleClose = () => {
    props.setOpen(false);
    props.setParentWindowOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }} display="flex" flexDirection="column">
        <Box sx={{ justifyContent: "center", display: "flex", size: "60px" }}>
          <LocalShippingIcon sx={{ fontSize: 170, color: "#5FAC52" }} />
        </Box>

        <Typography
          variant="h1"
          sx={{ justifyContent: "center", display: "flex", color: "#5FAC52" }}
        >
          Success
        </Typography>
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", display: "flex", color: "#5FAC52" }}
        >
          Your Order is on it's way!
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
