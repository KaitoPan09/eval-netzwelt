import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useLocation } from "react-router-dom";

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const location = useLocation();

    const showLogoutIcon = location.pathname !== "/login"

    return (
    <Box 
        display="flex" 
        justifyContent="space-between" 
        p={2}>
        <Box 
            >
        </Box>

        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (<LightModeOutlinedIcon />)}
            </IconButton>
            {showLogoutIcon && (
                <IconButton>
                    <LogoutOutlinedIcon/>
                </IconButton>
            )}
        </Box>
    </Box>);
}

export default Topbar;
