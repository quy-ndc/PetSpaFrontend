import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./register.css";
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel } from "@mui/material";

type Inputs = {
    name: string;
    email: string;
    phone: number;
    password: string;
    passwordConfirm: string;
    terms: boolean;
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
        <Box
            component="form"
            className="register-form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '320px',
                margin: 'auto',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
        >
            <Typography
                sx={{
                    marginBottom: "10px",
                    textAlign: "center",
                }}
                variant="h4"
                gutterBottom
            >
                Register
            </Typography>

            <TextField
                sx={inputStyle}
                required
                id="name"
                label="Username"
                {...register("name", { 
                    required: "Username is required",
                    minLength: {
                        value: 5,
                        message: "Username must be at least 5 characters"
                    },
                    pattern: {
                        value: /^[a-zA-Z][a-zA-Z0-9_!@#$%^&*()-+=]*$/,
                        message: "Username must start with a letter"
                    }
                })}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
                onBlur={() => trigger("name")}

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
                        message: "Email is not valid"
                    }
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                onBlur={() => trigger("email")}
                fullWidth
            />
             <TextField
                sx={inputStyle}
                required
                id="phone"
                label="Phone number"
                {...register("phone", { 
                    required: "Phone is required",
                    pattern: {
                        value: /^[0-9]{10,11}$/,
                        message: "Phone number must be 10-11 positive digits"
                    }
                })}
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
                onBlur={() => trigger("phone")}
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
                        if (value !== watch("password")) return "Passwords do not match";
                        return true;
                    }
                })}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm ? errors.passwordConfirm.message : ""}
                fullWidth
            />

            <FormControlLabel
                control={
                    <Checkbox 
                        {...register("terms", { required: "You must agree to the terms and conditions" })} 
                        color="primary" 
                    />
                }
                label="Agree to our Terms and Conditions"
                sx={{ alignSelf: 'flex-start' }}
            />
            {errors.terms && <Typography color="error">{errors.terms.message}</Typography>}

            <Button type="submit" variant="contained" sx={{ marginTop: '10px' }}>
                Register
            </Button>

            <Typography sx={{ marginTop: '20px' }}>
                <a href="/login">Have an account? Login</a>
            </Typography>
        </Box>
    );
}

export default Register;
