import * as React from 'react';
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
    const [showPassword, setShowPassword] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    const handleLogin = async () => {
        const username = document.getElementById('loginUser').value;
        const password = document.getElementById('loginPassword').value;

        // console.log('Username:', username);
        // console.log('Password:', password);
    
        try {
            const response = await fetch('http://localhost:3001/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });
            // console.log('Request Body:', JSON.stringify({ username, password }));

            response.ok ? (window.location.href='/home/index') 
            : setErrorMessage("Invalid username or password")
        } catch (error) {
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
                >
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
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
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
                    sx={{
                        mt: '3ch'
                    }}
                    // onClick={(e) => {
                    //     e.preventDefault();
                    //     window.location.href='/home'
                    // }}
                    >
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login