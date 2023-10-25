import "./App.css";

import React, { useMemo, useState } from "react";

import { DynamicRect } from "./components/DynamicRect";
import ReactSlider from "react-slider";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <DynamicRect reference={true} />
      <DynamicRect />
      <DynamicRect />
    </div>
  );
}

export default App;
