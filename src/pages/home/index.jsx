import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import React, { useState, useEffect } from "react";
// import axios from "axios";

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    const url = "https://netzwelt-devtest.azurewebsites.net/Territories/All";
    const [data, setData] = useState([]);

    const fetchTerritory = () => {
        return fetch(url)
          .then((res) => res.json())
          .then((d) => setData(d))
      }
    
    
      useEffect(() => {
        fetchTerritory();
      }, []);

    return (
    <Box m="20px">
        <Box 
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
            <Header title="HOME PAGE" subtitle="Where the Magic Happens" />
            <Box>
                {/* <Button
                    sx={{ backgroundColor: colors.blueAccent[700],
                        color: colors.gray[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px"}}
                    >
                    <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                    Download Reports
                </Button> */}
            </Box>
        </Box>

        <center>
            {data.map((dataObj, index) => {
            return (
                <Box
                sx={{
                    width: "15em",
                    backgroundColor: colors.orangeAccent[400],
                    p: 2,
                    borderRadius: 10,
                    marginBlock: 0.5,
                }}
                >
                {dataObj.name}
                </Box>
            );
            })}
        </center>

        {/* BODY */}
        {/* <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            > */}
            {/* ROW 1 */}
            {/* <Box 
                gridColumn="span 2" 
                gridrow="span 2"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    {data.map((dataObj, index) => {
                        return (
                            <Box
                                sx={{
                                    width: "15em",
                                    backgroundColor: colors.orangeAccent[400],
                                    p: 2,
                                    borderRadius: 10,
                                    marginBlock: 10,
                                }}
                            >
                                {dataObj.name}
                            </Box>
                        )
                    })}
            </Box> */}
        {/* </Box> */}
    </Box>
    )
}

export default Home;
