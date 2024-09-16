import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface QuantityPickerProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <Box display="flex" sx={{ border: "2px solid", borderRadius: "4px" }} gap="3px">
      <IconButton onClick={onDecrement} disabled={quantity <= 0}>
        <RemoveIcon />
      </IconButton>
      <Typography pt="8px">{quantity}</Typography>
      <IconButton>
        <AddIcon onClick={onIncrement} />
      </IconButton>
    </Box>
  );
};

export default QuantityPicker;
