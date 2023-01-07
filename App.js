import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import Chapter3 from "./chapter-3";

const App = () => {
  return <Chapter3 />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
