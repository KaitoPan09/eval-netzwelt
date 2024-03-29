import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import React, { useState, useEffect } from "react";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const genColors = [
      colors.orangeAccent[600],
      colors.orangeAccent[700],
      colors.orangeAccent[900],
    ]
    
    const [data, setData] = useState([]); // holds the fetched data

    useEffect(() => {
        const url = "/fetch-territories"; // territory fetch from backend
        
        fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })

        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data);
          const organizedTerritories = organizeTerritories(data);
          setData(organizedTerritories);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      }, []);
      
      // organize territoy
      const organizeTerritories = (flatTerritories) => {
        const territoryMap = {};
        flatTerritories.data.forEach((territory) => {
          territoryMap[territory.id] = { ...territory, children: [] };
        });
        
        const rootTerritories = [];
        
        flatTerritories.data.forEach((territory) => {
          territory.parent
            ? territoryMap[territory.parent].children.push(territoryMap[territory.id])
            : rootTerritories.push(territoryMap[territory.id]);
          });
      
        return rootTerritories;
      };

      const [openMap, setOpenMap] = React.useState({});

      // Drop down list handle
      const handleClick = (territoryId) => {
        setOpenMap((prevOpenMap) => ({
          ...prevOpenMap,
          [territoryId]: !prevOpenMap[territoryId],
        }));
      };

      // Renders list
      const renderTerritories = (territories, depth = 1) => {
        return territories.map((territory) => (
          <div key={territory.id}>
            <ListItemButton
              onClick={() => handleClick(territory.id)}
              sx={{ 
                pl: `${depth * 20}px`,
                bgcolor: genColors[depth - 1] 
              }}
            >
              {territory.children.length > 0 ? (
                openMap[territory.id] ? (
                  <ArrowDropUpOutlinedIcon sx={{ mr: '5px' }} />
                ) : (
                  <ArrowDropDownOutlinedIcon sx={{ mr: '5px' }} />
                )
              ) : null}
              <ListItemText primary={territory.name} />
            </ListItemButton>
            <Collapse in={openMap[territory.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderTerritories(territory.children, depth + 1)}
              </List>
            </Collapse>
          </div>
        ));
      };

    return (
    <Box m="20px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <Header title="TERRITORIES" subtitle="Here are a list of territories" />
      </Box>

      <center>
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="subHeader"
          subheader={
            <ListSubheader 
              component="div" 
              id="subHeader"
              sx={{ 
                color: colors.orangeAccent[100],
                bgcolor: colors.grey[900]
              }}
              >
              DROP DOWN MENU
            </ListSubheader>
            }
            >
              {data.map((territory) => (
                <div key={territory.id}>
                  {renderTerritories([territory])}
                </div>
                ))}
        </List>
      </center>
    </Box>
    )
}

export default Home;
