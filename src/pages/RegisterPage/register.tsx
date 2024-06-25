import { useForm, SubmitHandler } from "react-hook-form";
import "./register.css";
import { Box, TextField, Button, Typography } from "@mui/material";

type Inputs = {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
};

export default function Register() {
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
                    textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                color='black'
            >
                Join our pet-loving family
            </Typography>

            {/* register your input into the hook by invoking the "register" function */}
            <TextField
                sx={inputStyle}
                required
                id="outlined-required-email"
                label="Email"
                {...register("email", { pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i })}
            />
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
            <TextField
                sx={inputStyle}
                required
                id="outlined-required-password-confirm"
                label="Password confirm"
                type="password"
                {...register("passwordConfirm")}
            />

            {/* include validation with required or other standard HTML validation rules */}
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}

            <Button type="submit" variant="contained">
                Submit
            </Button>
        </Box>
    );
}
