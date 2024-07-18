import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../service/apiService";
import './login.css';

export default function Login() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async () => {
        try {
            const email = encodeURIComponent(username)
            const response = await api.get(`/user/login?email=${email}&password=${password}`);
            if (sessionStorage.getItem('jwtToken') == null || sessionStorage.getItem('jwtToken') == undefined || sessionStorage.getItem('jwtToken')?.trim() == "" || sessionStorage.getItem('jwtItem') != response.data.accessToken) {
                sessionStorage.setItem('jwtToken', response.data.accessToken);
            }
            if (sessionStorage.getItem('jwtToken')) {
                toast.success('Login successful!');
                setTimeout(() => {
                    window.location.href = "http://localhost:5173";
                }, 2000);
            }
            else {
                toast.error('Login failed! Please check your credentials and try again.');
            }

        } catch (err) {
            console.error('Login error:', err);
            toast.error('Login failed! Please check your credentials and try again.');
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
                label="Email"
                value={username}
                onChange={handleUsernameChange}
                type="email"
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
            <button type="submit" className="login-button" >
                <LoginIcon /> Login
            </button>
            <ToastContainer />
        </Box>
    );
}
