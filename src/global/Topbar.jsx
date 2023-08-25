import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { 
    ColorModeContext, 
    // tokens 
} from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Topbar = () => {
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box 
        // position="relative"
        display="flex" 
        justifyContent="space-between" 
        p={2}>
        {/* SEARCH BAR */}
        <Box 
            >
        </Box>

        {/* ICONS */}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (<LightModeOutlinedIcon />)}
            </IconButton>
            <IconButton>
                <LogoutOutlinedIcon/>
            </IconButton>
        </Box>
    </Box>);
}

export default Topbar;
