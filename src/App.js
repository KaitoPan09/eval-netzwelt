import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./global/Topbar";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  const [theme, colorMode] = useMode();
  
  return (<ColorModeContext.Provider value ={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/account/login" element={<Login />} /> */}
              {/* <Route path="/" element={<Navigate to="/account/login" replace />} /> */}
              <Route path="/account/login" element={<Login />} />
              <Route path="/home/index" element={<Home />} />
            </Routes>   
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>);
}

export default App;
