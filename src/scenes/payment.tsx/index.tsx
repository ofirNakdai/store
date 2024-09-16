import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        {/* Add your checkout content here */}
        <p>This is where you’ll put your checkout form or summary.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={() => alert("Proceed to Payment")} color="primary">
          Proceed to Payment
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckoutModal;
