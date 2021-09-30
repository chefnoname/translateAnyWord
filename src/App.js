import Header from "./components/Header";
import Box from "@mui/material/Box";
import MainContent from "./components/MainContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThemeSwitchButton from "./components/ThemeSwitchButton";

import "./App.css";
import { useState, useEffect } from "react";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
      background: "#0a1929",
      textBox: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0a1929",
      background: "#FFFFFF",
      textBox: "#999999",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const App = () => {
  const [activeTheme, setActiveTheme] = useState(darkTheme);

  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setActiveTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", activeTheme === darkTheme ? "dark" : "light");
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(activeTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <Box
        sx={{
          bgcolor: "primary.background",
          width: "100%",
          height: "100vh",
          marginTop: "-50px",
        }}
      >
        <Header />
        <MainContent />
        <ThemeSwitchButton onClick={toggleTheme} />
        {/* <button>toggle theme</button> */}
      </Box>
    </ThemeProvider>
  );
};

export default App;
