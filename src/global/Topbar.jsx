import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    // refers to session token for logout
    const authToken = sessionStorage.getItem('authToken');
    const isAuthenticated = authToken !== null;

    console.log("Is authenticated:", isAuthenticated);

    const showLogoutIcon = isAuthenticated;
    
    const handleLogout = () => {
        sessionStorage.removeItem('authToken')
        window.location.href = '/account/login';
    }

    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box>
        </Box>
        <Box display="flex">
            {/* toggles light and dark mode */}
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
                ) : (<LightModeOutlinedIcon />)}
            </IconButton>
            {/* logout icon visibility */}
            {showLogoutIcon && (
                <IconButton onClick={handleLogout}>
                    <LogoutOutlinedIcon/>
                </IconButton>
            )}
        </Box>
    </Box>);
}

export default Topbar;
