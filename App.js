import React from "react";
import ReactDOM from "react-dom/client";
import Chapter4 from "./chapter-4";

const Header = () => {};

const App = () => {
  return <Chapter4 />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
