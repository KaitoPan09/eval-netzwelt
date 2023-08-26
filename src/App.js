import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./global/Topbar";
import Home from "./pages/home";
import Login from "./pages/login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [theme, colorMode] = useMode();
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
              {/* <Route path="/account/login" element={<Login />} /> */}
              {/* <Route path="/" element={<Navigate to="/account/login" replace />} /> */}
              {/* <Route path="/account/login" element={<Login />} /> */}
              <Route path="/account/login" element={isAuthenticated ? <Home /> : <Login />} />
              <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/home/index" element={<Home />} /> */}
              {/* <Route path='/home/index' element={<PrivateRoute/>}>
                <Route path='/home/index' element={<Home/>}/>
              </Route> */}
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
