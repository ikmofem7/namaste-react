import React from "react";
import ReactDOM from "react-dom/client";
import Chapter5 from "./chapter-5/src";
import "./styles.css";
const App = () => {
  return <Chapter5 />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
