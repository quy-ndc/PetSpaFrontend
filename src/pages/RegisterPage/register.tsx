import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./register.css";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

type Inputs = {
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  password: string;
  passwordConfirm: string;
  gender: string;
  age: number;
};

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const inputStyle = {
    margin: "8px 0",
  };

  return (
    <div className="register-form-container">
      <Box
        component="form"
        className="register-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          sx={{
            marginBottom: "30px",
            textAlign: "center",
            fontFamily: "initial",
          }}
          variant="h3"
          gutterBottom
        >
          Join our pet-loving family
        </Typography>

        <div className="form-columns">
          <div className="form-column">
            <TextField
              sx={inputStyle}
              required
              id="firstName"
              label="First Name"
              {...register("firstName", {
                required: "First name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "First name must be letters",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
              onBlur={() => trigger("firstName")}
              fullWidth
            />

            <TextField
              sx={inputStyle}
              required
              id="lastName"
              label="Last Name"
              {...register("lastName", {
                required: "Last name is required",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Last name must be letters",
                },
              })}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ""}
              onBlur={() => trigger("lastName")}
              fullWidth
            />

            <TextField
              sx={inputStyle}
              required
              id="email"
              label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              onBlur={() => trigger("email")}
              fullWidth
            />

            <FormControl
              component="fieldset"
              sx={{ width: "100%", margin: "8px 0" }}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                sx={{ justifyContent: "space-between" }}
              >
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    />
                  }
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    />
                  }
                  label="Female"
                />
              </RadioGroup>
              {errors.gender && (
                <FormHelperText error>{errors.gender.message}</FormHelperText>
              )}
            </FormControl>
          </div>

          <div className="form-column">
            <TextField
              sx={inputStyle}
              required
              id="phone"
              label="Phone number"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^0[0-9]{9,10}$/,
                  message: "Phone number must be 10-11 positive digits",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
              onBlur={() => trigger("phone")}
              fullWidth
            />

            <TextField
              sx={inputStyle}
              required
              id="age"
              label="Age"
              {...register("age", {
                required: "Age is required",
                // pattern: {
                //   value: /^[0-9]{1,2}$/,
                //   message: "positive digits",
                // },
                min: {
                  value: 18,
                  message: "You must be at least 18 years old",
                },
                max: {
                  value: 82,
                  message: "Invalid",
                },
              })}
              error={!!errors.age}
              helperText={errors.age ? errors.age.message : ""}
              onBlur={() => trigger("age")}
              fullWidth
            />

            <TextField
              sx={inputStyle}
              required
              id="password"
              label="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              fullWidth
            />

            <TextField
              sx={inputStyle}
              required
              id="passwordConfirm"
              label="Confirm Password"
              type="password"
              {...register("passwordConfirm", {
                required: "Please confirm your password",
                validate: (value) => {
                  if (value === "") return "Password confirmation is required";
                  if (value !== watch("password"))
                    return "Passwords do not match";
                  return true;
                },
              })}
              error={!!errors.passwordConfirm}
              helperText={
                errors.passwordConfirm ? errors.passwordConfirm.message : ""
              }
              fullWidth
            />
          </div>
        </div>
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            Register
          </Button>
        </Box>

        <Typography sx={{ marginTop: "10px", textAlign: "center" }}>
          <a href="/login">Have an account? Login</a>
        </Typography>
      </Box>
    </div>
  );
};

export default Register;
