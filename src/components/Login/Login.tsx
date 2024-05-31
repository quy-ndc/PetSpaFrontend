import { useForm, SubmitHandler } from "react-hook-form";
import "./Login.css";
import { Box, TextField, Button, Typography } from "@mui/material";

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
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Box
            component="form"
            className="login-form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography
            sx={{
                marginBottom: "30px",
                textAlign: "center"
            }}
            variant="h6" gutterBottom>
                Login to your account
            </Typography>

            {/* register your input into the hook by invoking the "register" function */}
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

            {/* include validation with required or other standard HTML validation rules */}
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}

            <Button type="submit" variant="contained">
                Login
            </Button>
        </Box>
    );
}
