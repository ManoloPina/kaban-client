
import "./App.scss";
import "animate.css";
//Components
import Routes from "src/Routes";
import { AppProvider } from "src/context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  );
};

export default App;
