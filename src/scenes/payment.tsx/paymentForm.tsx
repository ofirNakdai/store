import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PaymentMethodesIcon from "../../resources/PaymentMethodes";

interface PaymentFormInputs {
  fullName: string;
  email: string;
  address: string;
  city: string;
  cardNumber: string;
  cardHolder: string;
  expirationMonth: string;
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
                label="Full Name"
                variant="outlined"
                error={!!errors.fullName}
                helperText={errors.fullName ? "Full Name is required" : ""}
                {...register("fullName", { required: true })}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <EmailIcon />
                <Typography>Email</Typography>
              </Box>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? "Email is required" : ""}
                {...register("email", { required: true })}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <HomeIcon />
                <Typography>Address</Typography>
              </Box>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                error={!!errors.address}
                helperText={errors.address ? "address is required" : ""}
                {...register("address", { required: true })}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <LocationCityIcon />
                <Typography>City</Typography>
              </Box>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                error={!!errors.city}
                helperText={errors.city ? "City is required" : ""}
                {...register("city", { required: true })}
              />
            </Box>
          </Box>

          {/* PAYMENT */}
          <Box display="flex" flexDirection="column" gap="20px">
            {/* TITLE */}
            <Typography variant="h3">Payment</Typography>

            {/* COMPONENTS */}
            <Box display="flex" flexDirection="column" gap="6px">
              <Typography>Accepted Cards</Typography>
              <Box display="flex" maxWidth="155px" sx={{mb:"21px"}}>
                <PaymentMethodesIcon />
              </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap="6px">
              <Box display="flex" gap="4px">
                <PersonIcon />
                <Typography>Name On Card</Typography>
              </Box>
              <TextField
                fullWidth
                label="Card Holder"
                variant="outlined"
                error={!!errors.cardHolder}
                helperText={errors.cardHolder ? "Card Holder name is required" : ""}
                {...register("cardHolder", { required: true })}
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
                label="Exp. Month"
                variant="outlined"
                error={!!errors.expirationMonth}
                helperText={errors.expirationMonth ? "Expiration Month is required" : ""}
                {...register("expirationMonth", { required: true })}
              />
            </Box>
          </Box>
        </Box>
      </form>

      <Box display="flex" flexDirection="row" justifyContent="space-between" mt="8px">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Wrap as Present"
        />
        <Button type="submit">Order</Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
