import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import api from "../../service/apiService";
import './login.css'

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async () => {
        try {
            const response = await api.get(`/user/login?email=${username}%40gmail.com&password=${password}`);
            console.log('Login successful:', response);
            sessionStorage.setItem('jwtToken', response.data.accessToken);
            setTimeout(() => {
                window.location.href = "http://localhost:5173";
            }, 2000)
        } catch (err) {
            console.error('Login error:', err);
            window.location.reload;
        }
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin();
    };

    const inputStyle = {
        margin: "15px 0",
    };

    return (
        <Box
            component="form"
            className="login-form"
            onSubmit={handleSubmit}
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
                value={username}
                onChange={handleUsernameChange}
            />
            <TextField
                sx={inputStyle}
                required
                id="outlined-required-password"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Link to='/register'>Don't have an account?</Link>
            <Button type="submit" className="login-button" variant="contained" color="primary">
                <LoginIcon /> Login
            </Button>
        </Box>
    );
}
