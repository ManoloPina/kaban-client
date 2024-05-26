import { ThemeProvider } from "styled-components";
//Styles
import "./App.scss";
import "animate.css";
import theme from "src/styles/theme";
//Components
import Routes from "src/Routes";
import { AppProvider } from "src/context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
