import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material/';
import Header from "../../components/Header";

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = async () => {
        const username = document.getElementById('loginUser').value;
        const password = document.getElementById('loginPassword').value;

        // try {
        //     // Sends POST request to backend
        //     const response = await fetch('http://localhost:3001/', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ username, password })
        //     });

        //     console.log('Response from server:', response);

        //     if (response.ok) {
        //         console.log('Authentication success:', response);
        //         const authToken = "sessionToken"; // token name, not secure for testing only
        //         sessionStorage.setItem('authToken', authToken); // adds session token
        //         window.location.href = '/home/index';
        //     } else {
        //         console.log('Authentication failed:', response);
        //         setErrorMessage("Invalid username or password");
        //     }
        // } 
        

        try {
            let response;

            // proxy setup locally
            if (process.env.NODE_ENV === 'development') {
                response = await fetch('http://localhost:3001/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                });
            } else {
                // Use the external URL in deployment
                // response = await fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({ username, password })
                // });
                window.location.href = '/home/index';
            }

            console.log('Response from server:', response);

            if (response.ok) {
                console.log('Authentication success:', response);
                const authToken = "sessionToken"; // token name, not secure for testing only
                sessionStorage.setItem('authToken', authToken); // adds session token
                window.location.href = '/home/index';
            } else {
                console.log('Authentication failed:', response);
                setErrorMessage("Invalid username or password");
            }
        } 
        catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred during login');
        }
    }

    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                height: '50vh',
                }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Header title="WELCOME!" subtitle="Please enter your credentials" />
                <TextField
                    id="loginUser"
                    label="Username"
                    sx={{ m: 1, width: '25ch' }}
                    color='secondary'
                    onKeyDown={(event) => 
                        event.key === "Enter" ? handleLogin() : null
                    }
                    />
                <FormControl 
                    sx={{ m: 1, width: '25ch' }} 
                    variant="outlined"
                    color='secondary'
                    >
                        <InputLabel htmlFor="loginPassword">Password</InputLabel>
                        <OutlinedInput
                            id="loginPassword"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggleVisibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                            onKeyDown={(event) => 
                                event.key === "Enter" ? handleLogin() : null
                            }
                        />
                </FormControl>
                <Typography color="error">{errorMessage}</Typography>
                <Button 
                    variant="outlined" 
                    endIcon={<LoginOutlinedIcon />}
                    color='secondary'
                    onClick={handleLogin}
                    sx={{ mt: '3ch'}}
                    >
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login