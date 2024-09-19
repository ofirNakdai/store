import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import PaymentForm from "./paymentForm";
import PaymentFormRHF from "./paymentForm-rhf";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const PaymentModel: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      {/* PAYMENT FORM */}
      <DialogContent>
        <PaymentFormRHF />
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModel;
