import React from "react";
import Homepage from "./Home";
import { ThemeProvider } from "styled-components";

const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Homepage />
      </div>
    </ThemeProvider>
  )
}

export default App;