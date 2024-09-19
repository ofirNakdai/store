import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import PaymentMethodesIcon from "../../resources/PaymentMethodes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  fullName: z.string().min(3, "Name has to be at least 3 characters"),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  cardHolder: z.string().min(3, "Has to be at least 3 characters"),
  cardNumber: z.string().min(1, "Card Number has to be longer"),
  expirationMonth: z.string(),
  wrapAsPresent: z.boolean(),
});
// .refine((data) => data.cardHolder === data.fullName, {
//   message: "Full naame and Card Holder Name Has to be the same!",
//   path: ["cardHolder"],
// });

interface PaymentFormInputs {
  fullName: string;
  email: string;
  address: string;
  city: string;
  cardNumber: string;
  cardHolder: string;
  expirationMonth: string;
  wrapAsPresent: boolean;
}

const PaymentFormRHF = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({ resolver: zodResolver(signUpSchema) });

  const onSubmit: SubmitHandler<PaymentFormInputs> = async (
    data: PaymentFormInputs
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" justifyContent="space-between">
        {/* Billing Address */}
        <Box display="flex" flexDirection="column" gap="20px" flex="0">
          {/* TITLE */}
          <Typography variant="h3" mb="10px">
            Billing Address
          </Typography>

          {/* COMPONENTS */}
          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex">
              <PersonIcon />
              <Typography>Full Name</Typography>
            </Box>
            <input {...register("fullName")} />
            {errors.fullName?.message && (
              <Typography
                sx={{
                  color: "red",
                  // backgroundColor: "rgba(255,0,0,0.1)",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                }}
              >
                {errors.fullName.message}
              </Typography>
            )}
          </Box>

          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex" gap="4px">
              <EmailIcon />
              <Typography>Email</Typography>
            </Box>
            <input {...register("email")} />
            {errors.email?.message && (
              <Typography
                sx={{
                  color: "red",
                  // backgroundColor: "rgba(255,0,0,0.1)",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                }}
              >
                {errors.email.message}
              </Typography>
            )}
          </Box>

          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex" gap="4px">
              <HomeIcon />
              <Typography>Address</Typography>
            </Box>
            <input {...register("address")} />
          </Box>

          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex" gap="4px">
              <LocationCityIcon />
              <Typography>City</Typography>
            </Box>
            <input {...register("city")} />
          </Box>

          <FormControlLabel
            control={<Checkbox {...register("wrapAsPresent")} />}
            label="Wrap as Presant"
          />

          {watch("wrapAsPresent") ? "Present Wrapping Selected" : "No Wrapping"}
        </Box>
        {/* Payment */}
        <Box display="flex" flexDirection="column" gap="20px" flex="0">
          {/* TITLE */}
          <Typography variant="h3" mb="10px">
            Payment
          </Typography>

          {/* COMPONENTS */}
          <Box display="flex" flexDirection="column" gap="6px">
            <Typography>Accepted Cards</Typography>
            <Box display="flex" maxWidth="155px" sx={{}}>
              <PaymentMethodesIcon />
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex" gap="4px">
              <PersonIcon />
              <Typography>Name On Card</Typography>
            </Box>
            <input {...register("cardHolder")} />
            {errors.cardHolder?.message && (
              <Typography
                sx={{
                  color: "red",
                  // backgroundColor: "rgba(255,0,0,0.1)",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                }}
              >
                {errors.cardHolder.message}
              </Typography>
            )}
          </Box>

          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex" gap="4px">
              <CreditCardIcon />
              <Typography>Credit Card</Typography>
            </Box>
            <input {...register("cardNumber")} />
            {errors.cardNumber?.message && (
              <Typography
                sx={{
                  color: "red",
                  // backgroundColor: "rgba(255,0,0,0.1)",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                }}
              >
                {errors.cardNumber.message}
              </Typography>
            )}
          </Box>

          <Box display="flex" flexDirection="column" gap="6px">
            <Box display="flex" gap="4px">
              <CalendarMonthIcon />
              <Typography>Exp. Month</Typography>
            </Box>
            <select {...register("expirationMonth")}>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => {
                return <option value={month}>{month}</option>;
              })}
            </select>
            {errors.expirationMonth?.message && (
              <Typography
                sx={{
                  color: "red",
                  // backgroundColor: "rgba(255,0,0,0.1)",
                  fontSize: "12px",
                  padding: "4px",
                  borderRadius: "4px",
                  maxWidth: "100%",
                }}
              >
                {errors.expirationMonth.message}
              </Typography>
            )}
          </Box>

          {/* Submitting Button */}
          <input
            type="submit"
            title="ORDER"
            disabled={isSubmitting}
            style={{ borderRadius: "4px", height: "35px" }}
          />
        </Box>{" "}
        {/* payment box */}
      </Box>
      {/* main box */}
    </form>
  );
};

export default PaymentFormRHF;
