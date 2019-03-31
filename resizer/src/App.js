import React, { Component } from "react";

import useWindowSize from "./useWindowSize";

function App() {
  const size = useWindowSize();
  return (
    <div className="app-container">
      <p>
        {size.width}px wide / {size.height}px tall
      </p>
    </div>
  );
}

export default App;
