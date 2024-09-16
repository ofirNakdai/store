import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface PaymentFormInputs {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

const PaymentForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>();

  const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* MAIN BOX */}
        <Box display="flex" justifyContent="space-between" gap="80px">
          {/* BILLING ADDRESS */}
          <Box display="flex" flexDirection="column" gap="20px">
            {/* TITLE */}
            <Typography variant="h3">Billing Address</Typography>

            {/* COMPONENTS */}
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex">
                <PersonIcon />
                <Typography>Full Name</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <EmailIcon />
                <Typography>Email</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <HomeIcon />
                <Typography>Address</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <LocationCityIcon />
                <Typography>City</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>
          </Box>

          {/* PAYMENT */}
          <Box display="flex" flexDirection="column" gap="20px">
            {/* TITLE */}
            <Typography variant="h3">Payment</Typography>

            {/* COMPONENTS */}
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <Typography>Accepted Cards</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <PersonIcon />
                <Typography>Name On Card</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <CreditCardIcon />
                <Typography>Credit Card</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <CalendarMonthIcon />
                <Typography>Exp. Month</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? "Card number is required" : ""}
                {...register("cardNumber", { required: true })}
              />
            </Box>
          </Box>
        </Box>
      </form>

      {/* <Typography variant="h5" gutterBottom>
        Payment Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card Number"
              variant="outlined"
              error={!!errors.cardNumber}
              helperText={errors.cardNumber ? "Card number is required" : ""}
              {...register("cardNumber", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cardholder Name"
              variant="outlined"
              error={!!errors.cardHolder}
              helperText={
                errors.cardHolder ? "Cardholder name is required" : ""
              }
              {...register("cardHolder", { required: true })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiration Date (MM/YY)"
              variant="outlined"
              error={!!errors.expirationDate}
              helperText={
                errors.expirationDate ? "Expiration date is required" : ""
              }
              {...register("expirationDate", { required: true })}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVV"
              variant="outlined"
              type="password"
              error={!!errors.cvv}
              helperText={errors.cvv ? "CVV is required" : ""}
              {...register("cvv", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit Payment
            </Button>
          </Grid>
        </Grid>
      </form> */}
    </Box>
  );
};

export default PaymentForm;
