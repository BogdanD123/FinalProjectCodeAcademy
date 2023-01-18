import React from "react";
import { ThemeContext } from "./context/setupContext";
import { useHandleThemeContext } from "./context/actions";
import Layout from "./components/UserInterface/Layout";
import "./App.css";
import "./index.css";

function App() {
  const theme = useHandleThemeContext();

  return (
    <ThemeContext.Provider value={theme}>
      <Layout />
    </ThemeContext.Provider>
  );
}

export default App;
