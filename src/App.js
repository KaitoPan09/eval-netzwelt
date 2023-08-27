import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  const [theme, colorMode] = useMode();

  // checking sessionStorage for token
  const authToken = sessionStorage.getItem('authToken');
  console.log('Authentication token:', authToken);
  const isAuthenticated = authToken !== null;
  
  return (
  <ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/account/login" element={isAuthenticated ? <Home /> : <Login />} />
              <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
              <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
              <Route path="/home" element={isAuthenticated ? <Home /> : <Login />} />
              <Route path="/index" element={isAuthenticated ? <Home /> : <Login />} />
              <Route path="/home/index" element={isAuthenticated ? <Home /> : <Login />} />
            </Routes>   
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    );
}

export default App;
