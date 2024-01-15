import React from "react";
import { ThemeProvider } from "styled-components";
//Styles
import "./App.scss";
import "animate.css";
import theme from "src/styles/theme";
//Components
import Routes from "src/routes";
import { AppProvider } from "src/context/AppContext";
//Pages

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
