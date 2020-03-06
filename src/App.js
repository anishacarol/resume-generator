import React from "react";
// import logo from './logo.svg';
import { AppContainer } from "./App.styled";
import Header from "../src/components/Header/Header";
import Data from "../src/components/Data/Data";

function App() {
  return (
    <AppContainer>
      <Header />
      <Data />
    </AppContainer>
  );
}

export default App;
