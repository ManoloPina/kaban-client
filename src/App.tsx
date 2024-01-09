import React from "react";
import { AuthProvider } from "src/context/AuthContext";

//Styles
import "./App.scss";
//Components
import Routes from "src/routes";
//Pages

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
