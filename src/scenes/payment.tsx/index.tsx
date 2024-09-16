import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import PaymentForm from "./paymentForm";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const PaymentModel: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {/* PAYMENT FORM */}
      <DialogContent>
        <PaymentForm />
      </DialogContent>

      {/* BUTTONS */}
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={() => alert("Proceed to Payment")} color="primary">
          Submit Payment
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentModel;
