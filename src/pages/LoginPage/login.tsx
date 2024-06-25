import { useForm, SubmitHandler } from "react-hook-form";
import "./login.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';

type Inputs = {
    username: string;
    password: string;
};

export default function Login() {
    const {
        register,
        handleSubmit, // watch
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it

    const inputStyle = {
        margin: "15px 0",
    };

    return (
        <>
            <Box
                component="form"
                className="login-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography
                    sx={{
                        marginBottom: "30px",
                        textAlign: "center",
                        color: 'black'

                    }}
                    variant="h6" gutterBottom>
                    Login to your account
                </Typography>

                <TextField
                    sx={inputStyle}
                    required
                    id="outlined-required-username"
                    label="Username"
                    {...register("username")}
                />
                <TextField
                    sx={inputStyle}
                    required
                    id="outlined-required-password"
                    label="Password"
                    type="password"
                    {...register("password")}
                />

                {errors.password && <span>This field is required</span>}
                <Link to='/register'>Don't have an account?</Link>
                <button type="submit" className="login-button">
                    <LoginIcon /> Login
                </button>
                <span > Or</span>
                <button className="google-button">
                    <GoogleIcon /> Continue with Google
                </button>
            </Box >
        </>
    );
}
