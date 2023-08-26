import * as React from 'react';
import { Box, Button} from '@mui/material/';
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

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                <TextField
                    id="loginUser"
                    label="Username"
                    sx={{ m: 1, width: '25ch' }}
                    color='secondary'
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
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button 
                    variant="outlined" 
                    endIcon={<LoginOutlinedIcon />}
                    color='secondary'
                    >
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login